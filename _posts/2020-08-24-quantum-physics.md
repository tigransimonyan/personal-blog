---
title: Քուանտային ֆիզիկան վիճակախաղերում
categories: [Տեխնիկական, Խառը]
tags: [ծրագրաւորում, մաթեմատիկա, ֆիզիկա]
math: false
---

Ուսումնասիրելով ժամանակակից վիճակախաղերը կարելի է նկատել, որ դրանց գերակշիռ մասը աշխատում են դասական համակարգիչների օգնութեամբ։ Համակարգիչը պատահականութեան սկզբունքով ընտրում է կոմբինացիա կամ թիւ, որի արդիւնքում մասնակիցը կարող է շահել իր խաղադրոյքը մի քանի անգամ գերազանցող մրցանակ։

Այդպիսի խաղերը սակայն ունեն մի շատ կարեւոր թերութիւն։ Բան այն է, որ դասական համակարգիչները ի վիճակի չեն գեներացնել պատահական թուեր։

Ինչպէս յայտնի մաթեմատիկոս Ռոբերտ Քաւիւն էր կատակում՝

> Պատահական թուեր գեներացնելը չափազանց կարեւոր է, պատահականութեանը թողնելու համար։

Այս խնդիրը տարիներ շարունակ եղել է ծրագրաւորողների ուշադրութեան կենտրոնում։ Այն շրջանցելու նպատակով մի շարք ծրագրաւորման լեզուներ օգտագործել են [LCG](https://en.wikipedia.org/wiki/Linear_congruential_generator){:target="\_blank"} ալգորիթմը, որը հնարաւորութիւն է տալիս մաթեմատիկական հաշուարկների օգնութեամբ ստանալ կեղծ-պատահական թուեր։

Դրանից բացի կան նաեւ յատուկ միկրոչիպեր, որոնք կարողանում են ջերմային կամ ձայնային աղմուկից ստանալ բացարձակ պատահական թուեր։ Նման միկրոչիպերը օգտագործուում են կրիպտոգրաֆիայի ոլորտում եւ անհամեմատ դանդաղ են վիճակախաղերի համար։

## **Քուանտային ֆիզիկա**

Ժամանակակից գիտութիւնը լայն հնարաւորութիւններ է տալիս նման խնդիրների լուծման համար։ Այսօր արդէն հնարաւոր է ծրագրաւորել քուանտային համակարգիչներ եւ ստանալ բացարձակ պատահական թուեր։ Այդպիսի համակարգիչներ, առնուազն ամպային տարբերակով կարող էք գտնել՝

» [IBM](https://www.ibm.com/quantum-computing/){:target="\_blank"}  
» [Microsoft Azur](https://azure.microsoft.com/en-us/services/quantum/){:target="\_blank"}

Պատահական թուիւ գեներացնող ծրագիր [Q#](https://docs.microsoft.com/en-us/learn/modules/qsharp-create-first-quantum-development-kit){:target="\_blank"} ծրագրաւորման լեզուով՝

```js
namespace QuantumRNG {

    open Microsoft.Quantum.Canon;
    open Microsoft.Quantum.Intrinsic;
    open Microsoft.Quantum.Measurement;
    open Microsoft.Quantum.Math;
    open Microsoft.Quantum.Convert;

    operation GenerateRandomBit() : Result {
        // Allocate a qubit.
        using (q = Qubit()) {
            // Put the qubit to superposition.
            H(q);
            // It now has a 50% chance of being measured 0 or 1.
            // Measure the qubit value.
            return MResetZ(q);
        }
    }

    operation SampleRandomNumberInRange(max : Int) : Int {
        mutable output = 0;
        repeat {
            mutable bits = new Result[0];
            for (idxBit in 1..BitSizeI(max)) {
                set bits += [GenerateRandomBit()];
            }
            set output = ResultArrayAsInt(bits);
        } until (output <= max);
        return output;
    }

    @EntryPoint()
    operation SampleRandomNumber() : Int {
        let max = 50;
        Message($"Sampling a random number between 0 and {max}: ");
        return SampleRandomNumberInRange(max);
    }
}
```
