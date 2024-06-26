---
title: JavaScript - 3. Տվյալների տիպերը
categories: [Տեխնիկական, JavaScript]
tags: [ջաւասկրիպտ, ծրագրաւորում]
---

Ինչպես արդեն գիտենք, ջավասկրիպտը դինամիկ տիպայնացում ունեցող ծրագրավորման լեզու է, ինչի շնորհիվ փոփոխականը հայտարաում ենք առանց սահմանելու նարա մեջ պահվող արժեքի տիպը։ Փոփոխականի տիպը որոշվում է ավտոմատ, ծրագրի կատարման պահին եւ կարող է փոխվել նոր արժեք վերագրելու դեպքում։ Այդ տիպերը տեսնելու համար օգտագործվում է typeof օպերատորը, որը կարող ենք գրել փոփոխականի կամ արժեքի դիմաց, օրինակ՝

```js
let num = 12;

alert(typeof num);
alert(typeof 'Lusine');
```

Ջավասկրիպտի հիմնական տիպերրն են՝

## Number - Թիվ

Այս տիպին են պատկանում բոլոր թվերը, Infinity (բնական թվերի անվերջությունը), -Infinity (բացասական թվերի անվերջությունը) եւ NaN –ը, որը ստացվում է մաթեմատիկորեն անհաշվելի արտահայտության արդյունքում:

```js
let a = 3;
alert(typeof a);

let b = Infinity;
alert(typeof b);
```

## String - Տող

Այս տիպին են պատկանում լատինական, մեկական կամ երկուական չակերտների մեջ գրված ցանկացած արժեք, օրինակ՝

```js
const email = 'username@gmail.com';

alert(typeof email);
```

## Undefined - Չսահմանված

Այս տիպին է պատկանում undefined արժեքը։ Այդպիսի արժեք ունեն չսահմանված փոփոխականները, օրինակ՝

```js
let a;
let b = 'text';
b = undefined;

alert(typeof a);
alert(typeof b);
```

այս օրինակում a փոփոխականը undefined տիպի է, քանի որ չունի արժեք։ undefinde կարող ենք վերագրել արդեն արժեք ունեցող փոփոխականին, որպիսզի փոխենք դրա տիպը՝ չսահմանվածի։

## Null - Դատարկ

Այս տիպին է պատկանում null-ը։ null-ը չի հանդիսանում որեւէ այլ տիպի զրոյական արժեք, այն ինքն իրենով առանձին տիպ է, որի արժեքը համարվում է «դատարկ» կամ «անհայտ» արժեք։

```js
let data = null;

alert(typeof data);
```

> null արժեքի համար typeof օպերատորը null-ի փոխարեն վերադարձնում է object, ինչը պաշտոնապես համարվել է ջավասկրիպտ լեզվի սխալ։

## Boolean - Տրամաբանական

Այս տիպին են պատկանում 2 արժեք՝ true (ճիշտ), false (սուտ), օրինակ՝

```js
let checked = true;

alert(typeof checked);
```

## Symbol - Սիմվոլ

Այս տիպին պատկանող արժեքը ունիկալ է, որը կարող ենք ստանալ միայն Symbol ֆունկցիայի օգնությամբ, օրինակ՝

```js
let key = Symbol();

alert(typeof key);
```

## Object - Օբյեկտ

Այս տիպին է պատկանում ձեւավոր փակագծերի մեջ գրվող տվյալների հավաքածուն, օրինակ՝

```js
let user = {
  name: 'Arsen',
  age: 20,
  email: 'arsen@gmail.com',
};

alert(typeof user);
```

> Օբյեկտից բացի, մյուս 6 տիպերը համարվում են պարզ տիպեր։

Հետագա հոդվածներում առանձին-առանձին կուսումնասիրենք բոլոր տիպերը եւ կսովորենք դրանց հետ աշխատելու մեթհոդները։
