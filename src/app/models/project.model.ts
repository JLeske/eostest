export class Project {
    id: string;
    title: string;
    git: string;

    constructor(fields: any) {
        this.id = this.createUID();
        this.title = fields && fields.title || '';
        this.git = fields && fields.git || '';
    }

    private createUID(): string {
        return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10);
    }
}