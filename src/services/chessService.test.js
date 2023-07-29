import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import aiService from './chessService';

const mock = new MockAdapter(axios);

describe('aiService', () => {
    it('returns the best move from the AI service', async () => {
        const squares = Array(64).fill(null);
        const expectedBestMove = { source: 8, destination: 17 };

        mock.onPost('http://my-chess-ai-server.com/api/getBestMove').reply(200, {
            bestMove: expectedBestMove,
        });

        const bestMove = await aiService.getBestMove(squares);

        expect(bestMove).toEqual(expectedBestMove);
    });

    it('throws an error if the server response is not as expected', async () => {
        const squares = Array(64).fill(null);
        mock.onPost('http://my-chess-ai-server.com/api/getBestMove').reply(200, {
            wrongKey: { source: 0, destination: 0 },
        });

        await expect(aiService.getBestMove(squares)).rejects.toThrow('Unexpected server response');
    });

    it('throws an error if the server is not reachable', async () => {
        const squares = Array(64).fill(null);

        mock.onPost('http://my-chess-ai-server.com/api/getBestMove').networkError();

        await expect(aiService.getBestMove(squares)).rejects.toThrow();
    });
});
