/*
1. Objetos são elementos(substantivos) de um sistema que interagem ente si.
Classes são modelos que enquadram objetos em categorias.
Ex.:
Classe Pessoa                    Objeto Pessoa
Nome: Texto;                     Nome: Cláudio;
Data de Nascimento: Data;        Data de Nascimento: 20/05/1978;
Altura: Número;                  Altura: 1.6


2. Atributos são as características e propriedades que os objetos possuem, definindo também o seu estado.
Métodos são comportamentos ou ações que um objeto pode realizar.
Ex.:
Atributos: Marley, Rex e Scooby.
Métodos: Anda, late, come, dorme, pega osso.

3. 

Peso                      Alistamento no exército               Loja de calçados
Tipo de CNH               Empresa de transportes                Escritório de advocacia 
Tipo Sanguíneo            Centros de doação de sangue           Vagas para concursos
Habilidade destra         Fabricante de carteiras escolares     Rede de restaurantes
Percentual de gordura     Sistema de Hospital                   Cadastro de cartão
Saldo em conta            Sistema bancário                      Serviços de entretenimento
Etinia                    Sistemas de dados                     Aluguel de veículos


4. Considerando os objetos Pessoa e Conta:
a. Seria interessante em um sistema bancário um objeto "conta" possuir uma
"pessoa" como um atributo interno representando o titular da conta?


b. Olhando no sentido inverso, seria interessante uma pessoa possuir mais de
uma conta como atributo? Que elemento da programação estruturada melhor
representaria o conjunto de contas de uma pessoa?


5. Horário Individual, Calendário Acadêmico, Boletim, Histórico Escolar, Matrizes Curriculares.


6. Objetos:                 Atributos:                            Métodos:
   Pessoas                  Nome, peso, altura, raça              Andar, falar, correr, comer
   Animais                  Espécie, raça, filo, habitat          Perserguir, comer, fugir
   Veículos                 Tipo, cor, tamanho, potência          Acelerar, frear, buzinar
*/

7. 
    class Retangulo {
        l1: number = 0;
        l2: number = 0;

        calculaPerimetro(): number {
            return this.l1 * 2 + this.l2 * 2;
        }
    }

    let retangulo : Retangulo;
    retangulo = new Retangulo();
    retangulo.l1 = 10;
    retangulo.l2 = 20;

    console.log(retangulo.calculaPerimetro());


8.
    class Circulo {
        r : number = 0;

        calculaArea() : number {
            return 3.14 * (this.r ** 2);
        }
        calculaPerimetro() : number {
            return 2 * 3.14 * this.r;
        }
    }

    let r : Circulo = new Circulo;
    r.r = 3;
    console.log("A área do círculo é: " + r.calculaArea());
    console.log("O perímetro do círculo é: " + r.calculaPerimetro());


9.
    class SituacaoFinanceira {
        valorCreditos : number = 0;
        valorDebitos :number = 0;

        calcularSaldo(): number{
            return this.valorCreditos - this.valorDebitos;
        }
    }

    let v: SituacaoFinanceira = new SituacaoFinanceira();
    v.valorCreditos = 500;
    v.valorDebitos = 350;
    console.log("O saldo é de R$ " + v.calcularSaldo());
