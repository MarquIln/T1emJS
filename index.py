import os

def simular_labirinto(labirinto):
    carro_posicao = 0
    dinheiro_coletado = []

    for linha in labirinto:
        for i, simbolo in enumerate(linha):
            if simbolo == '/':
                carro_posicao -= 1
            elif simbolo == '\\':
                carro_posicao += 1
            elif simbolo == '#':
                print('Bandidos capturados!')
                contar_dinheiro(dinheiro_coletado)
                return
            elif simbolo.isdigit():
                valor_dinheiro = ''
                while i < len(linha) and linha[i].isdigit():
                    valor_dinheiro += linha[i]
                    i += 1
                dinheiro_coletado.append(int(valor_dinheiro))

    print(f'Dinheiro coletado em ordem: {dinheiro_coletado}')

def contar_dinheiro(dinheiro_coletado):
    total_dinheiro = sum(dinheiro_coletado)
    print(f'Total de dinheiro coletado: R$ {total_dinheiro}')

caminho_arquivo = os.path.abspath('labirinto50.txt')

if os.path.exists(caminho_arquivo):
    with open(caminho_arquivo, 'r') as arquivo:
        linhas = arquivo.readlines()
    linhas = [linha.strip() for linha in linhas]
    dimensoes = [int(dimensao) for dimensao in linhas[0].split()]
    labirinto = []
    for linha in linhas[1:]:
        labirinto.append(list(linha))

    simular_labirinto(labirinto)
else:
    print(f"O arquivo '{caminho_arquivo}' não foi encontrado.")
