export class NoteFoundError extends Error {
    constructor(message = 'Resource not found') {
        super(message);
        this.name = 'NoteFoundError';
        this.statusCode = 404;
    }
}