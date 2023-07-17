import {describe, it, expect, vi} from 'vitest';
import { generateReportData } from './data';

describe('generateReportData()', () => {
    // spy method
    it('should execute logFn if provided', () => {
        // This is our spy function
        // vi if using vitest or use jest if using jest
        // fn will create a function and keeps track of the arguments that were called
        const logger = vi.fn();

        // lets use create a mock inside the test
        // mockImplementationOnce, will execute the function only once
        // mockImplementation will execute whenever it is called
        // logger.mockImplementation(()=>{});

        // pass the spy function
        generateReportData(logger);

        // this will only pass if logger was called
        expect(logger).toBeCalled();
    });
});
