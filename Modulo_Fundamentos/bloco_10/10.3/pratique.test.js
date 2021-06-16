const pratique = require('./pratique');

describe('Testes funcoes arquivo pratique dia 10.3', () => {
  // 1 - Faça o mock da funcão subtrair e teste sua chamada.
  test('#Subtrair', () => {
    const mockSubtrair = jest.spyOn(pratique, 'subtrair');

    mockSubtrair(5, 3);
    expect(mockSubtrair).toHaveBeenCalled();
    expect(mockSubtrair).toHaveBeenCalledTimes(1);
    expect(mockSubtrair).toHaveBeenCalledWith(5, 3);
    expect(mockSubtrair(6,3)).toBe(3);
  });

  // 2 - Faça o mock da função multiplicar e implemente como retorno padrão o valor '10'. Teste a chamada e o retorno.
  test('#Multiplicar', () => {
    const mockMulti = jest
      .spyOn(pratique, 'multiplicar')
      .mockReturnValue(10);

    mockMulti(5, 2);
    expect(mockMulti).toHaveBeenCalled();
    expect(mockMulti).toHaveBeenCalledTimes(1);
    expect(mockMulti).toHaveBeenCalledWith(5, 2);
    expect(mockMulti()).toBe(10);
  });

  // 3 - Faça o mock da função somar e implemente uma função que recebe dois valores e retorna sua soma. Teste a chamada, o retorno e os parâmetros passados.
  test('#Somar', () => {
    const mockSum = jest
      .spyOn(pratique, 'somar')
      .mockImplementation((a ,b) => a + b);

    mockSum(4, 4);
    expect(mockSum).toHaveBeenCalled();
    expect(mockSum).toHaveBeenCalledTimes(1);
    expect(mockSum).toHaveBeenCalledWith(4, 4);
    expect(mockSum(4, 4)).toBe(8);
  });

  // 4 - Faça o mock da função dividir e implemente um retorno padrão com o valor '15'. Implemente também os seguintes valores para
  // a primeira e segunda chamadas: '2' e '5'.Teste a chamada, o retorno, os parâmetros e quantas vezes a função foi chamada.
  test('#Dividir', () => {
    const mockDiv = jest
      .spyOn(pratique, 'dividir')
      .mockReturnValue(15);

    mockDiv(30, 2);
    expect(mockDiv).toHaveBeenCalled();
    expect(mockDiv).toHaveBeenCalledTimes(1);
    expect(mockDiv).toHaveBeenCalledWith(30, 2);
    expect(mockDiv(30, 2)).toBe(15);
    expect(mockDiv).toHaveBeenCalledTimes(2);
    expect(mockDiv(75, 5)).toBe(15);
    expect(mockDiv).toHaveBeenCalledTimes(3);
    expect(mockDiv).toHaveBeenLastCalledWith(75, 5);
  });

  // 5 - Faça o mock da função subtrair de maneira que seja possível restaurar sua implementação original. Defina como retorno padrão o valor '20'. 
  // Teste o número de chamadas e o retorno. Restaure a implementação original da função e teste sua execução.


});