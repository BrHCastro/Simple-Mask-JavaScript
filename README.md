

# (☞ﾟヮﾟ)☞ Simple Mask JavaScript | ![GitHub](https://img.shields.io/github/license/BrHCastro/Simple-Mask-JavaScript?style=plastic) | ![GitHub Repo stars](https://img.shields.io/github/stars/BrHCastro/Simple-Mask-JavaScript?style=plastic)
Criando uma máscara de Telefone (ou qualquer outra coisa) com Javascript 💛💛💛

```javascript
    function mask(value, pattern) {
        let i = 0
        const v = value.toString()

        return pattern.replace(/#/g, () => v[i++] || '')
    }

    const masked = mask(15991656655, '(##) #####-####')

    console.log(masked) // (15) 99165-6655
```

## Autor:
Henrique de Castro

## Licença:
Projeto está sob licença do [MIT](https://opensource.org/licenses/mit-license.php)
