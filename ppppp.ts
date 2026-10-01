class WebTester {
    private applicationUrl: string;

    constructor(applicationUrl: string) {
        this.applicationUrl = applicationUrl;
    }

    openApplication(): void {
        console.log(`Opening application: ${this.applicationUrl}`);
    }

    validatePage(): boolean {
        console.log("Validating web page...");
        return true;
    }

    runTest(): void {
        this.openApplication();

        const isValid = this.validatePage();

        if (isValid) {
            console.log("Test Status: PASS");
        } else {
            console.log("Test Status: FAIL");
        }
    }
}

const tester = new WebTester("https://example.com");

tester.runTest();