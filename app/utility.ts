function getInputValue(id: string): string {
  const inputElement: HTMLInputElement = <HTMLInputElement>(
    document.getElementById(id)
  );

  return inputElement.value;
}

function logger(message: string): void {
  console.log(message);
}
export { getInputValue, logger };
