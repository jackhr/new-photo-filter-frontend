function getMimeType(fileName: string) {
    const extensionToMimeType: { [key: string]: string } = {
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.png': 'image/png',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.webp': 'image/webp',
        '.pdf': 'application/pdf',
        '.txt': 'text/plain',
        '.html': 'text/html',
        '.js': 'application/javascript',
        '.json': 'application/json',
        '.css': 'text/css',
        '.xml': 'application/xml',
    };

    const extension = fileName.slice(fileName.lastIndexOf('.')).toLowerCase();

    return extensionToMimeType[extension] || 'application/octet-stream';
}