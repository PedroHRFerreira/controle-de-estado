## O que são Atoms no Atomic Design?

No Atomic Design, **atoms (átomos)** são os blocos mais fundamentais da interface. Eles representam os elementos mais simples e indivisíveis do design, que não podem ser quebrados em partes menores sem perder sua funcionalidade.

Exemplos comuns de _atoms_ incluem:

- Botões (`<button>`)
- Inputs (`<input>`)
- Ícones
- Labels
- Cores e tipografias (em forma de tokens de design)

Esses elementos por si só têm pouca funcionalidade visual ou interativa complexa, mas são essenciais para a construção de componentes maiores. Assim como na química, os átomos se combinam para formar moléculas e organismos mais complexos.

A organização do projeto com Atomic Design começa justamente pelos _atoms_, garantindo que toda a base do sistema de design seja consistente e reutilizável.

> **Exemplo prático:**  
> Um `<Button>` estilizado com um rótulo e comportamento padrão pode ser considerado um atom. Ele pode depois ser reutilizado em diferentes contextos da aplicação com variações de estilo ou função.
