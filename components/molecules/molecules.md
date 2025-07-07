## O que são Molecules no Atomic Design?

No Atomic Design, **molecules (moléculas)** são combinações de dois ou mais _atoms_ que trabalham juntos como uma unidade funcional. Elas ainda são relativamente simples, mas já começam a apresentar uma interação mais significativa dentro da interface.

As _molecules_ representam pequenos grupos de elementos que, quando combinados, criam componentes com mais propósito e funcionalidade.

### Exemplos comuns de molecules:

- Um campo de busca com um input (`<input>`) e um botão (`<button>`)
- Um grupo de ícones com seus respectivos labels
- Um formulário simples com campos e títulos

Essas combinações seguem um único propósito claro e ainda são altamente reutilizáveis em diferentes partes do sistema.

> **Exemplo prático:**  
> Uma `SearchBar` pode ser considerada uma _molecule_, pois agrupa um `<Input>` (atom) com um `<Button>` (atom) para realizar uma função: buscar algo.

As _molecules_ reforçam a ideia de composição e ajudam a construir interfaces com base em pequenos blocos bem definidos, promovendo reutilização e consistência.
