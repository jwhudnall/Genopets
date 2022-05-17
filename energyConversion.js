const getEnergy = (totalSteps, decay) => {
  const getInterval = (steps) => {
    return Math.floor(steps / 1000);
  };

  let energy = 0;

  for (let i = 1; i <= totalSteps; i++) {
    if (i <= 1) {
      energy += 1;
    } else {
      energy += (1 - decay) ** getInterval(i);
    }
  }
  return energy;
};

// Currently DOES NOT WORK. Progress saved.
const getEnergyNew = (bankedSteps, petLevel) => {
  const getInterval = (steps) => {
    return Math.floor(steps / 1000);
  };

  const getSER = (petLevel) => {
    if (petLevel > 77) {
      return 4.8;
    } else if (petLevel < 1) {
      return null;
    }
    return 1.0 + 0.05 * (petLevel - 1);
  };

  const Decay = 6;
  const SER = getSER(petLevel);

  const SEF = (Decay - (SER - 1)) / 100;
  const Ei = 1;
  const nurture = 1;

  let energy = 0;

  for (let i = 1; i <= bankedSteps; i++) {
    if (i == 1) {
      energy += 1;
    } else {
      energy += bankedSteps * (Ei * (1 - SEF) ** getInterval(bankedSteps)) * nurture;
    }
  }
  return energy;
};

const result10k = getEnergyNew(10000, 1);
console.log(`Final Energy for 10k steps: ${result10k}`);

// const result3k = getEnergy(3000, 0.055);
// const result5k = getEnergy(5000, 0.055);
// const result8k = getEnergy(8000, 0.055);
// const result10k = getEnergy(10000, 0.055);
// const result15k = getEnergy(15000, 0.055);
// const result20k = getEnergy(20000, 0.055);

// console.log(`Final Energy for 3,000 steps: ${result3k}`);
// console.log(`Final Energy for 5,000 steps: ${result5k}`);
// console.log(`Final Energy for 8,000 steps: ${result8k}`);
// console.log(`Final Energy for 10,000 steps: ${result10k}`);
// console.log(`Final Energy for 15,000 steps: ${result15k}`);
// console.log(`Final Energy for 20,000 steps: ${result20k}`);
