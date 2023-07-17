import {vi} from 'vitest';

export const promises = {
    // promises contain writeFile method
    writeFile: vi.fn((path, data) => {
        // we return a promise
        return new Promise((resolve, reject) => {
            // automatically resolve
            resolve();
        })
    })
}

// it can also be "export default" if creating mock for "path" library
// export default ... code