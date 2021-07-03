export const pdf_generator = async (event: any = {}): Promise<any> => {
    console.log('Hello World!');
    const response = JSON.stringify(event, null, 2);
    return response;
}
