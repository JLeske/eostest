export class Build {
    id: string;
    buildResult: string;
    projectName: string;
    buildLog: string;

    constructor(fields: any) {
        this.id = this.createUID();
        this.buildResult = fields && fields.buildResult || '';
        this.projectName = fields && fields.projectName || '';
        this.buildLog = fields && fields.buildLog || '';
    }

    private createUID(): string {
        return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10);
    }
}