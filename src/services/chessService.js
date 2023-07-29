import axios from 'axios';

const AI_SERVICE_URL = 'http://my-chess-ai-server.com/api/getBestMove';
const getBestMove = async (squares) => {
    try {
        const response = await axios.post(AI_SERVICE_URL, { squares });
        if (response.data && response.data.bestMove) {
            return response.data.bestMove;
        } else {
            throw new Error('Unexpected server response');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export default { getBestMove };
