function getCardChances(deckSize, handSize, cardCount) {
  console.log("in getCardChances");
  console.log(deckSize);
  console.log(handSize);
  console.log(cardCount);
  let totalVariations = getTotalVariations(deckSize, handSize);
  // console.log(`Всего может быть - ${totalVariations} комбинаций`);
  let allVariations = getVariations(handSize, cardCount);
  let chances = allVariations.map((variant) => {
    return getCombinationChance(variant, deckSize, cardCount);
  });
  let repeats = allVariations.map((variant) => {
    return getRepeats(variant);
  });
  let allVariationsCount = [];
  for (let i = 0; i < allVariations.length; i++) {
    allVariationsCount.push(
      Math.round(((chances[i] * repeats[i]) / totalVariations) * 10000) / 100
    );
  }
  let average = 0;
  for (let i = 0; i < allVariations.length; i++) {
    average += (allVariationsCount[i] * i) / 100;
  }
  // console.log(allVariations);
  // console.log(chances);
  // console.log(repeats);
  console.log(allVariationsCount);
  return {
    values: allVariationsCount,
    average,
  };
}

function getTotalVariations(deckSize, handSize) {
  let totalVariations = 1;
  for (let i = deckSize; i > deckSize - handSize; i--) {
    totalVariations *= i;
  }
  return totalVariations;
}

function getVariations(handSize, cardCount) {
  let arrSize = cardCount > handSize ? handSize + 1 : cardCount + 1;
  let variations = new Array(arrSize).fill(new Array(handSize).fill(0));
  for (let i = 0; i < arrSize; i++) {
    variations[i] = structuredClone(variations[i].fill(1, handSize - i));
  }
  return variations;
}

function getCombinationChance(combination, deckSize, cardCount) {
  let deck = [deckSize - cardCount, cardCount];
  let chance = 1;
  for (let i = 0; i < combination.length; i++) {
    chance = chance * deck[combination[i]];
    deck[combination[i]]--;
  }
  return chance;
}

function getRepeats(combination) {
  let divident = 1;
  for (let i = combination.length; i > 0; i--) {
    divident = divident * i;
  }
  let divider = 1;
  for (let j = 0; j < combination.length; j++) {
    divider = divider * countRepetitions(combination, j); //Вычисление делителя
  }
  let repeatsOfSet = divident / divider; //Вычисление частного
  return repeatsOfSet;
}

function countRepetitions(array, index) {
  let repetitions = 1;
  for (let i = 0; i < array.length; i++) {
    if (index > i) {
      //Проверку проводить до переданного индекса
      if (array[index] == array[i]) {
        //Если проверяемое значение совпадает
        repetitions++; //то увеличиваем счетчик
      }
    } else {
      return repetitions; //Дальше переданного индекса не проверять
    }
  }
  return repetitions;
}

//console.log(getCardChances(60, 7, 24));

export default getCardChances;
//-------------------------------------------------------
//-------------------------------------------------------
//-------------------------------------------------------

/*function getAllCombinationWithChances(deck, handSize) {
  let allCombinations = getAllCombinations(deck, handSize);
  console.log(
    `Всего может быть - ${totalCountVariations(deck, handSize)} комбинаций`
  );
  let allCombinationWithChances = allCombinations.map((combination) => {
    return { combination, chance: chanceOfCombination(deck, combination) };
  });
  let totalChances = 0;
  allCombinationWithChances.forEach((combination) => {
    totalChances += combination.chance;
  });
  console.log(`Просчитано вариантов - ${totalChances}`);
  console.log(allCombinationWithChances);
  return allCombinationWithChances;
}*/

// getAllCombinationWithChances(deck, 14);

/*function getAllCombinations(deck, handSize) {
  // Оптимизация функции заключается в том, чтобы не перебирать все возможные сочетания последовательно от 0000000000 до 9999999999, ставя в каждую позицию по 100 карт. Так как в этом случае нужно перебрать триллион(1000000000000) комбинаций для стокартовой деки (10 по 10) с 10 картовой рукой. В таком случае из триллиона нужно суммировать колличество одинаковых комбинаций.
  // В представленной функции собирается массив уникальных комбинаций и для каждой затем вычисляется вероятность выпадения среди всех возможных комбинаций от 0000000000, 0000000001 до 8999999999, 9999999999. В этом случае нужно перебрать 48620 комбинаций для стокартовой деки (10 по 10) с 10 картовой рукой, что в 20млн раз меньше первого подхода.
  // Работа только с идентификаторами

  let generatedCombinations = fillAllCombinations(deck, handSize);

  // Перебор комбинаций
  function fillAllCombinations(deck, handSize) {
    let allCombinations = [];
    let startCombination = structuredClone(getStartCombination(deck, handSize));
    let finishCombination = structuredClone(
      getFinishCombination(deck, handSize)
    );

    allCombinations.push(startCombination); //Добавление стартовой комбинации к набору комбинаций
    let currentCombination = structuredClone(startCombination); //Клонирование стартового сета
    // eslint-disable-next-line
    while (true) {
      //Бесконечный цикл
      if (currentCombination.toString() != finishCombination.toString()) {
        //Пока текущий сет не станет последним сетом
        let combinationsDifferentLastCard =
          increaseLastCard(currentCombination);
        allCombinations = [
          ...allCombinations,
          ...combinationsDifferentLastCard,
        ]; //Выполнить увеличение последней цифры (многократно), с добавлением в набор сетов
        if (currentCombination.toString() != finishCombination.toString()) {
          //Если текущий сет не стал последним сетом
          currentCombination = increasePreviousCard(
            structuredClone(currentCombination)
          ); //то выполнить увеличение разряда (однократно), с добавлением в набор сетов
          if (currentCombination.toString() != finishCombination.toString()) {
            if (isValidArray(currentCombination)) {
              allCombinations.push(structuredClone(currentCombination));
            }
          }
        } else {
          allCombinations.push(finishCombination);
          break; //иначе прервать бесконечный цикл
        }
      } else {
        allCombinations.push(finishCombination); //Добавление конечной комбинации к набору комбинаций
        break; //Когда текущий сравняется с последним, прервать бесконечный цикл
      }
    }
    return allCombinations;
  }

  // Получение стартовой комбинации
  function getStartCombination(deck, handSize) {
    let cards = structuredClone(deck);
    let startCombination = [];
    for (let i = 0; startCombination.length < handSize; i++) {
      if (cards[0].count > 0) {
        startCombination.push(cards[0].id);
        cards[0].count--;
      } else {
        cards.shift();
      }
    }
    return startCombination;
  }

  // Получение конечной комбинации
  function getFinishCombination(deck, handSize) {
    let cards = structuredClone(deck);
    let finishCombination = [];
    for (let i = 0; finishCombination.length < handSize; i++) {
      if (cards[cards.length - 1].count > 0) {
        finishCombination.unshift(cards[cards.length - 1].id);
        cards[cards.length - 1].count--;
      } else {
        cards.pop();
      }
    }
    return finishCombination;
  }

  // Функция изменения последней карты, возвращает массив комбинаций
  function increaseLastCard(currentCombination) {
    let cardCombinations = [];
    let cardInDeckIndex = deck.findIndex((card) => {
      return card.id === currentCombination[currentCombination.length - 1];
    });
    if (cardInDeckIndex < deck.length) {
      for (let i = cardInDeckIndex + 1; i < deck.length; i++) {
        currentCombination[currentCombination.length - 1] = deck[i].id;
        if (isValidArray(currentCombination)) {
          cardCombinations.push(structuredClone(currentCombination));
        }
      }
    }
    return cardCombinations;
  }

  //Функция проверки количество изменяемой карты не превышено
  function isValidArray(checkingCombination) {
    // !!!Здесь доделать!!!
    let checkedCardId;
    for (let i = 0; i < checkingCombination.length; i++) {
      if (checkingCombination[i] === checkedCardId) {
        continue;
      } else {
        checkedCardId = checkingCombination[i];
      }
      let checkedCard = deck.find((card) => {
        return card.id === checkedCardId;
      });
      let cardRepeatsInCombination = checkingCombination.filter(
        (item) => item === checkedCardId
      ).length;
      if (cardRepeatsInCombination > checkedCard.count) {
        return false;
      }
    }
    return true;
  }

  // Функция увеличения предыдущей карты, возвращает одну комбинацию
  function increasePreviousCard(currentCombination) {
    let lastCardId = currentCombination[currentCombination.length - 1];
    let increasedCardIndex = currentCombination.indexOf(lastCardId) - 1;
    let increasedCardDeckIndex = deck.findIndex((card) => {
      return card.id === currentCombination[increasedCardIndex];
    });
    let nextCardId = deck[increasedCardDeckIndex + 1].id;
    for (let i = increasedCardIndex; i < currentCombination.length; i++) {
      //Изменяемую цифру увеличиваем на 1, все последующие делаем такими же
      currentCombination[i] = nextCardId;
    }
    return currentCombination;
  }

  return generatedCombinations;
}*/

//Функция расчета вероятности выпадения текущего расклада
/*function chanceOfCombination(deck, currentCombination) {
  let cards = structuredClone(deck);
  let chance = 1;
  for (let i = 0; i < currentCombination.length; i++) {
    let card = cards.find((item) => {
      return item.id === currentCombination[i];
    });
    chance = chance * card.count;
    card.count--;
  }
  if (currentCombination.toString() === "01,02") {
    console.log("Для варианта 01,02");
    console.log(`Вариантов раздачи - ${chance}`);
  }
  return chance * countRepeats(currentCombination);
}*/

/*function totalCountVariations(deck, handSize) {
  let cardsTotal = 0;
  deck.forEach((card) => {
    cardsTotal += card.count;
  });
  let totalVariations = 1;
  for (let i = 0; i < handSize; i++) {
    totalVariations *= cardsTotal;
    cardsTotal--;
  }
  return totalVariations;
}*/

//Количество повторов
//Вычисление вариантов текущего расклада (например, сочетание значений [0,0,0,0,0,0,1] может повториться в 7 различных комбинациях)
//----------------------------------------------------------------------------------------------------
/*function countRepeats(currentArray) {
  let divident = 1;
  for (let i = currentArray.length; i > 0; i--) {
    divident = divident * i;
  }
  let divider = 1;
  for (let j = 0; j < currentArray.length; j++) {
    divider = divider * countRepetitions(currentArray, j); //Вычисление делителя
  }
  let repeatsOfSet = divident / divider; //Вычисление частного
  return repeatsOfSet;
}*/

//Функция подсчета количества повторений по индексу в массиве
//(Каким повторением в массиве является значение с указанным индексом. Например, в массиве [0,0,0,1,1,2,1] элемент с индексом 4 встречается второй раз, а элемент с индексом 6 встречается третий раз)
//----------------------------------------------------------------------------------------------------
/*function countRepetitions(array, index) {
  let repetitions = 1;
  for (let i = 0; i < array.length; i++) {
    if (index > i) {
      //Проверку проводить до переданного индекса
      if (array[index] == array[i]) {
        //Если проверяемое значение совпадает
        repetitions++; //то увеличиваем счетчик
      }
    } else {
      return repetitions; //Дальше переданного индекса не проверять
    }
  }
  return repetitions;
}*/
//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------

//Количество повторов
//Вычисление вариантов текущего расклада (например, сочетание значений [0,0,0,0,0,0,1] может повториться в 7 различных комбинациях)
//----------------------------------------------------------------------------------------------------

/*let percentChance = []; //Массив процентов
for (let ff = 0; ff < allSets.length; ff++) {
  percentChance[ff] = +fullChanceOfSet(allSets[ff]);
}*/

//Конвертирование массива с цифрами в массив с картами
/*convertToCard = function (currentArray) {
  let cardsArray = [];
  for (let t = 0; t < currentArray.length; t++) {
    cardsArray.push(cardTypes[currentArray[t]]);
  }
  return cardsArray;
};*/

//Фильтрация по комбинациям маны
//Удаление заклинаний из наборов
/*trimingMana = function (currentArray) {
  for (cc = 0; cc < currentArray.length; cc++) {
    if (currentArray[cc] >= typesOfLands) {
      currentArray.length = cc; //Обрезаем массив
      break;
    }
  }
  return currentArray;
};*/

//Проверка уникальности мана-комбинации
/*isRepeat = function (currentArray) {
  let arr = cloneArray(currentArray).join("");
  for (let i = 0; i < manaCombination.length; i++) {
    if (arr == cloneArray(manaCombination[i]).join("")) {
      return i;
    }
  }
  return false;
};*/

/*filterByMana = function (currentArray, order) {
  let cuttedArray = trimingMana(currentArray);
  let findedRepeat = isRepeat(currentArray);
  if (findedRepeat) {
    manaCombinationPercent[findedRepeat] += percentChance[order];
  } else {
    manaCombination.push(cuttedArray);
    manaCombinationPercent.push(percentChance[order]);
  }
};*/

//Обобщение количества земель без учета заклинаний
/*let manaCombination = [];
let manaCombinationPercent = [];
for (let bb = 0; bb < allSets.length; bb++) {
  filterByMana(cloneArray(allSets[bb]), bb);
}*/

//Сортировка по количеству маны
/*let manaSortedArray = [];
let percentSortedArray = [];
for (let i = 0; i <= handSize; i++) {
  manaSortedArray[i] = [];
  percentSortedArray[i] = [];
}
for (let j = 0; j < manaCombination.length; j++) {
  let manas = manaCombination[j].length;
  manaSortedArray[manas].push(manaCombination[j]);
  percentSortedArray[manas].push(manaCombinationPercent[j]);
}*/

//Вывод урезанных вариантов
//Суммирование процентов
/*sumPersent = function (manas) {
  let sum = 0;
  for (let i = 0; i < percentSortedArray[manas].length; i++) {
    sum = sum + percentSortedArray[manas][i];
  }
  return sum.toFixed(2);
};*/

/*globalSets = function (lands) {
  let set = [];
  for (let i = 0; i < handSize; i++) {
    if (i < lands) {
      set.push(randomLand);
    } else {
      set.push(randomSpell);
    }
  }
  return set;
};*/

/*for (let gg = manaSortedArray.length - 1; gg >= 0; gg--) {
  //Начиная с большего количества маны

  document.write(
    `<button class="btn btn-outline-secondary btn-block mb-3 collapsed" type="button" data-toggle="collapse" data-target="#collapse${gg}" aria-expanded="false" aria-controls="collapse${gg}">`
  );
  document.write(globalSets(gg));
  document.write(`<span class="badge badge-light">${sumPersent(gg)} %</span>`);
  document.write(`</button>`);

  document.write(`<div class="collapse" id="collapse${gg}">`);
  for (let i = 0; i < manaSortedArray[gg].length; i++) {
    //Для каждого элемента
    document.write(
      convertToCard(manaSortedArray[gg][i]) +
        " - " +
        percentSortedArray[gg][i] +
        "%<br>"
    );
  }
  document.write(`</div>`);
}*/
