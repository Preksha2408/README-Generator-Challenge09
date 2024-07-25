const generateMarkdown = require('./generateMarkdown');

describe('generateMarkdown', () => {
    const mockData = {
        title: 'Sample Project',
        license: 'MIT',
        description: 'This is a sample project.',
        features: 'Feature 1, Feature 2',
        require: 'Node.js, Express',
        usage: 'Run npm start to begin.',
        yourname: 'John Doe',
        email: 'john.doe@example.com',
        creator: 'johndoe',
        contributors: 'Jane Doe',
        test: 'npm test',
    };

    it('should generate markdown with all provided data', () => {
        const result = generateMarkdown(mockData);
        expect(result).toContain('# Sample Project');
        expect(result).toContain('![Github license](https://img.shields.io/badge/license-MIT-blue.svg)');
        expect(result).toContain('## License');
        expect(result).toContain('This project is licensed under the MIT license.');
        expect(result).toContain('For more information, see the [license link](https://opensource.org/licenses/MIT).');
        expect(result).toContain('## Description\nThis is a sample project.');
        expect(result).toContain('## Features\nFeature 1, Feature 2');
        expect(result).toContain('## Languages & Dependencies\nNode.js, Express');
        expect(result).toContain('## How to Use This Application:\nRun npm start to begin.');
        expect(result).toContain('## Contact-Me\n* Name - (John Doe)\n* Email - [john.doe@example.com]\n* GitHub - [johndoe]');
        expect(result).toContain('## Contributors\nJane Doe');
        expect(result).toContain('## Testing\nnpm test');
    });

    it('should generate markdown without license section if no license is provided', () => {
        const dataWithoutLicense = { ...mockData, license: 'none' };
        const result = generateMarkdown(dataWithoutLicense);
        expect(result).not.toContain('![Github license]');
        expect(result).not.toContain('## License');
    });
});

