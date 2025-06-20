const performCanvasManipulations = (canvasRef, hightCenter = 0.40, widthCenter = 0.80, sizeMultiplier = 0.8) => {
	if (canvasRef.current) {
		const c = canvasRef.current;
		var w = c.width = window.innerWidth,
			h = c.height = window.innerHeight,
			ctx = c.getContext('2d'),

			opts = {
				range: 280 * sizeMultiplier,
				baseConnections: 4,
				addedConnections: 7,
				baseSize: 8 * sizeMultiplier,
				minSize: 2 * sizeMultiplier,
				dataToConnectionSize: .4,
				sizeMultiplier: .7,
				allowedDist: 60 * sizeMultiplier,
				baseDist: 60 * sizeMultiplier,
				addedDist: 45 * sizeMultiplier,
				connectionAttempts: 100,
				dataToConnections: 1,
				baseSpeed: .02,
				addedSpeed: .01,
				baseGlowSpeed: .05,
				addedGlowSpeed: .05,
				rotVelX: .0008,
				rotVelY: .0005,
				repaintColor: '#111',
				connectionColor: 'hsla(249,60%,light%,alp)',
				rootColor: 'hsla(0,60%,light%,alp)',
				endColor: 'hsla(285 ,70%,light%,alp)',
				dataColor: 'hsla(40,80%,light%,alp)',
				wireframeWidth: .1,
				wireframeColor: '#88f',
				depth: 250,
				focalLength: 250,
				vanishPoint: {
					x: w * widthCenter,
					y: h * hightCenter
				}
			},

			squareRange = opts.range * opts.range,
			squareAllowed = opts.allowedDist * opts.allowedDist,
			mostDistant = opts.depth + opts.range,
			sinY = 0,
			sinX = 0,
			cosY = 0,
			cosX = 0,

			connections = [],
			toDevelop = [],
			data = [],
			all = [],
			tick = 0,

			animating = false,
			animationFrameId = null,

			Tau = Math.PI * 2;

		ctx.fillStyle = '#222';
		ctx.fillRect(0, 0, w, h);
		ctx.fillStyle = '#ccc';
		ctx.font = '50px Verdana';
		ctx.fillText('Calculating Nodes', w / 2 - ctx.measureText('Calculating Nodes').width / 2, h / 2 - 15);

		window.setTimeout(init, 4); // to render the loading screen

		function init() {

			connections.length = 0;
			data.length = 0;
			all.length = 0;
			toDevelop.length = 0;

			var connection = new Connection(0, 0, 0, opts.baseSize);
			connection.step = Connection.rootStep;
			connections.push(connection);
			all.push(connection);
			connection.link();

			while (toDevelop.length > 0) {

				toDevelop[0].link();
				toDevelop.shift();
			}

			if (!animating) {
				animating = true;
				anim();
			}
		}
		function Connection(x, y, z, size) {

			this.x = x;
			this.y = y;
			this.z = z;
			this.size = size;

			this.screen = {};

			this.links = [];
			this.probabilities = [];
			this.isEnd = false;

			this.glowSpeed = opts.baseGlowSpeed + opts.addedGlowSpeed * Math.random();
		}
		Connection.prototype.link = function () {

			if (this.size < opts.minSize)
				return this.isEnd = true;

			var links = [],
				connectionsNum = opts.baseConnections + Math.random() * opts.addedConnections | 0,
				attempt = opts.connectionAttempts,

				alpha, beta, len,
				cosA, sinA, cosB, sinB,
				pos = {},
				passedExisting, passedBuffered;

			while (links.length < connectionsNum && --attempt > 0) {

				alpha = Math.random() * Math.PI;
				beta = Math.random() * Tau;
				len = opts.baseDist + opts.addedDist * Math.random();

				cosA = Math.cos(alpha);
				sinA = Math.sin(alpha);
				cosB = Math.cos(beta);
				sinB = Math.sin(beta);

				pos.x = this.x + len * cosA * sinB;
				pos.y = this.y + len * sinA * sinB;
				pos.z = this.z + len * cosB;

				if (pos.x * pos.x + pos.y * pos.y + pos.z * pos.z < squareRange) {

					passedExisting = true;
					passedBuffered = true;
					for (let i = 0; i < connections.length; ++i)
						if (squareDist(pos, connections[i]) < squareAllowed)
							passedExisting = false;

					if (passedExisting) {
						for (let j = 0; j < links.length; ++j)
							if (squareDist(pos, links[j]) < squareAllowed)
								passedBuffered = false;
					}

					if (passedExisting && passedBuffered)
						links.push({ x: pos.x, y: pos.y, z: pos.z });

				}

			}

			if (links.length === 0)
				this.isEnd = true;
			else {
				for (let i = 0; i < links.length; ++i) {
					const newPos = links[i],
						connection = new Connection(newPos.x, newPos.y, newPos.z, this.size * opts.sizeMultiplier);

					this.links[i] = connection;
					all.push(connection);
					connections.push(connection);
				}
				for (let i = 0; i < this.links.length; ++i)
					toDevelop.push(this.links[i]);
			}
		}
		Connection.prototype.step = function () {

			this.setScreen();
			var glowIntensity = 50 + 30 * (0.5 + 0.5 * Math.sin(tick * this.glowSpeed));
			this.screen.color = (this.isEnd ? opts.endColor : opts.connectionColor).replace('light', glowIntensity).replace('alp', .2 + (1 - this.screen.z / mostDistant) * .8);

			for (var i = 0; i < this.links.length; ++i) {
				ctx.moveTo(this.screen.x, this.screen.y);
				ctx.lineTo(this.links[i].screen.x, this.links[i].screen.y);
			}
		}
		Connection.rootStep = function () {
			this.setScreen();
			var glowIntensity = 50 + 30 * (0.5 + 0.5 * Math.sin(tick * this.glowSpeed));
			this.screen.color = opts.rootColor.replace('light', glowIntensity).replace('alp', (1 - this.screen.z / mostDistant) * .8);

			for (var i = 0; i < this.links.length; ++i) {
				ctx.moveTo(this.screen.x, this.screen.y);
				ctx.lineTo(this.links[i].screen.x, this.links[i].screen.y);
			}
		}
		Connection.prototype.draw = function () {
			if (!isFinite(this.screen.x) || !isFinite(this.screen.y) ||
				!isFinite(this.screen.scale) || !isFinite(this.size) ||
				this.screen.scale * this.size <= 0) {
				return;
			}

			ctx.fillStyle = this.screen.color;
			ctx.beginPath();
			try {
				ctx.arc(this.screen.x, this.screen.y,
					Math.min(100, this.screen.scale * this.size),
					0, Tau);
				ctx.fill();
			} catch (e) {
				console.warn('Drawing error prevented:', e);
			}
		}
		function Data(connection) {

			this.glowSpeed = opts.baseGlowSpeed + opts.addedGlowSpeed * Math.random();
			this.speed = opts.baseSpeed + opts.addedSpeed * Math.random();

			this.screen = {};

			this.setConnection(connection);
		}
		Data.prototype.reset = function () {

			this.setConnection(connections[0]);
			this.ended = 2;
		}
		Data.prototype.step = function () {

			var currentConnectionSize = this.os + this.ds * this.proportion;
			var journeyProgress = Math.max(0, Math.min(1, (currentConnectionSize - opts.minSize) / (opts.baseSize - opts.minSize)));

			this.proportion += this.speed * journeyProgress;

			if (this.proportion < 1) {
				this.x = this.ox + this.dx * this.proportion;
				this.y = this.oy + this.dy * this.proportion;
				this.z = this.oz + this.dz * this.proportion;
			} else {
				this.setConnection(this.nextConnection);
			}

			this.size = currentConnectionSize * opts.dataToConnectionSize;

			this.screen.lastX = this.screen.x;
			this.screen.lastY = this.screen.y;
			this.setScreen();

			var perspectiveAlpha = (1 - this.screen.z / mostDistant);
			var finalAlpha = Math.max(0, journeyProgress * perspectiveAlpha * 0.8 + 0.2);
			var glowIntensity = 60 + 40 * (0.5 + 0.5 * Math.sin(tick * this.glowSpeed));
			this.screen.color = opts.dataColor.replace('light', glowIntensity).replace('alp', finalAlpha.toFixed(3));
		}
		Data.prototype.draw = function () {
			if (this.ended)
				return --this.ended;

			if (!isFinite(this.screen.x) || !isFinite(this.screen.y) ||
				!isFinite(this.screen.lastX) || !isFinite(this.screen.lastY) ||
				!isFinite(this.screen.scale) || !isFinite(this.size)) {
				return;
			}

			ctx.beginPath();
			ctx.strokeStyle = this.screen.color;
			ctx.lineWidth = Math.min(100, this.size * this.screen.scale);
			try {
				ctx.moveTo(this.screen.lastX, this.screen.lastY);
				ctx.lineTo(this.screen.x, this.screen.y);
				ctx.stroke();
			} catch (e) {
				console.warn('Drawing error prevented:', e);
			}
		}
		Data.prototype.setConnection = function (connection) {

			if (connection.isEnd)
				this.reset();

			else {

				this.connection = connection;
				this.nextConnection = connection.links[connection.links.length * Math.random() | 0];

				this.ox = connection.x; // original coordinates
				this.oy = connection.y;
				this.oz = connection.z;
				this.os = connection.size; // base size

				this.nx = this.nextConnection.x; // new
				this.ny = this.nextConnection.y;
				this.nz = this.nextConnection.z;
				this.ns = this.nextConnection.size;

				this.dx = this.nx - this.ox; // delta
				this.dy = this.ny - this.oy;
				this.dz = this.nz - this.oz;
				this.ds = this.ns - this.os;

				this.proportion = 0;

				this.size = this.os * opts.dataToConnectionSize;
				this.screen = {};
				this.setScreen();
			}
		}
		Connection.prototype.setScreen = Data.prototype.setScreen = function () {

			var x = this.x,
				y = this.y,
				z = this.z;

			// apply rotation on X axis
			var Y = y;
			y = y * cosX - z * sinX;
			z = z * cosX + Y * sinX;

			// rot on Y
			var Z = z;
			z = z * cosY - x * sinY;
			x = x * cosY + Z * sinY;

			this.screen.z = z;

			// translate on Z
			z += opts.depth;

			this.screen.scale = opts.focalLength / z;
			this.screen.x = opts.vanishPoint.x + x * this.screen.scale;
			this.screen.y = opts.vanishPoint.y + y * this.screen.scale;

		}
		function squareDist(a, b) {

			var x = b.x - a.x,
				y = b.y - a.y,
				z = b.z - a.z;

			return x * x + y * y + z * z;
		}

		function anim() {

			animationFrameId = window.requestAnimationFrame(anim);

			ctx.globalCompositeOperation = 'source-over';
			ctx.fillStyle = opts.repaintColor;
			ctx.fillRect(0, 0, w, h);

			++tick;

			var rotX = tick * opts.rotVelX,
				rotY = tick * opts.rotVelY;

			cosX = Math.cos(rotX);
			sinX = Math.sin(rotX);
			cosY = Math.cos(rotY);
			sinY = Math.sin(rotY);

			if (data.length < connections.length * opts.dataToConnections) {
				var datum = new Data(connections[0]);
				data.push(datum);
				all.push(datum);
			}

			ctx.globalCompositeOperation = 'lighter';
			ctx.beginPath();
			ctx.lineWidth = opts.wireframeWidth;
			ctx.strokeStyle = opts.wireframeColor;
			all.map(function (item) {
				item.step();
				return item;
			});
			ctx.stroke();
			ctx.globalCompositeOperation = 'source-over';
			all.sort(function (a, b) { return b.screen.z - a.screen.z });
			all.map(function (item) {
				item.draw();
				return item;
			});

		}


		const handleResize = function () {

			opts.vanishPoint.x = (w = c.width = window.innerWidth) / 2;
			opts.vanishPoint.y = (h = c.height = window.innerHeight) / 2;
			ctx.fillRect(0, 0, w, h);
		};
		window.addEventListener('resize', handleResize);
		window.addEventListener('click', init);

		return {
			cleanup: () => {
				window.removeEventListener('resize', handleResize);
				window.removeEventListener('click', init);
				if (animationFrameId) {
					cancelAnimationFrame(animationFrameId);
					animationFrameId = null;
				}
				animating = false;
			}
		};
	}
};

export { performCanvasManipulations };