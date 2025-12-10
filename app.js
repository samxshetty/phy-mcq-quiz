class PHYQuizApp {
    constructor() {
        this.questions = [
 {
    id: 1,
    question: "An experimental evidence for matter waves is",
    options: ["photoelectric effect", "Compton effect", "electron diffraction", "interference of light"],
    correct: 2
  },
  {
    id: 2,
    question: "A wave packet is used to represent",
    options: ["A light wave", "A stationary wave", "Matter wave", "A transverse wave"],
    correct: 2
  },
  {
    id: 3,
    question: "Wave function associated with matter waves is a quantum mechanical equivalent of",
    options: ["wavelength of the wave", "frequency of the wave", "amplitude of the wave", "phase of the wave"],
    correct: 2
  },
  {
    id: 4,
    question: "The concept of matter wave was suggested by_________",
    options: ["Heisenberg", "de Broglie", "Schrodinger", "Laplace"],
    correct: 1
  },
  {
    id: 5,
    question: "The function representing matter waves must be ________",
    options: ["complex", "real", "zero", "infinity"],
    correct: 0
  },
  {
    id: 6,
    question: "A particle with rest mass m₀ is moving with speed c. The de-broglie wavelength associated with it is",
    options: ["zero", "infinity", "hγ/c²", "m₀c"],
    correct: 0
  },
  {
    id: 7,
    question: "The matter waves are",
    options: ["light waves", "sound waves", "probablistic waves", "e.m.waves"],
    correct: 2
  },
  {
    id: 8,
    question: "The wavelength of matter waves does not depend on",
    options: ["charge", "mass", "velocity", "momentum"],
    correct: 0
  },
  {
    id: 9,
    question: "de Broglie wavelength of a body of mass m and kinetic energy E is given by:",
    options: ["λ = / h", "λ = h / meV", "λ = h / √(2mE)", "λ = h/2meV"],
    correct: 2
  },
  {
    id: 10,
    question: "If the energy of a particle is reduced to one-fourth then the percentage increase in the de-Broglie wavelength is",
    options: ["41%", "100%", "144%", "70%"],
    correct: 1
  },
  {
    id: 11,
    question: "The kinetic energy of electron and proton is the same. The relation between their de-broglie wavelengths λₑ and λₚ is",
    options: ["λₑ = λₚ", "λₑ < λₚ", "λₑ > λₚ", "λₑ = 2λₚ"],
    correct: 2
  },
  {
    id: 12,
    question: "The wave nature associated with electrons in motion was verified by",
    options: ["Photoelectric effect", "Compton effect", "Diffraction by crystals", "incidence of electrons on metallic surface"],
    correct: 2
  },
  {
    id: 13,
    question: "…………… of a wave is the velocity with which variations in the shape of modulation or envelop of the wave propagate through space.",
    options: ["The elliptical velocity", "The phase velocity", "The group velocity", "The circular velocity"],
    correct: 2
  },
  {
    id: 14,
    question: "The phase and group velocities does not depend on which of the following?",
    options: ["Frequency", "Wavelength", "Phase constant", "Attenuation constant"],
    correct: 3
  },
  {
    id: 15,
    question: "de Broglie wavelength can be assigned to",
    options: ["only electrons", "any stationary body", "any moving body", "only subatomic particles"],
    correct: 2
  },
  {
    id: 16,
    question: "Which one of the following objects, moving at the same speed, has the greatest de Broglie wavelength?",
    options: ["Neutron", "Electron", "Tennis ball", "Foot ball"],
    correct: 1
  },
  {
    id: 17,
    question: "The group velocity of matter waves associated with a moving particle is:",
    options: ["The same as phase velocity", "Less than the particle velocity", "Equal to the particle velocity", "More than the particle velocity"],
    correct: 2
  },
  {
    id: 18,
    question: "Uncertainty principle is applicable to",
    options: ["Macroscopic particles", "Microscopic particles", "gases", "None"],
    correct: 1
  },
  {
    id: 19,
    question: "According to Heisenberg uncertainty principle,",
    options: ["E = mc²", "Δx x Δp >= h/4π", "λ = h / p", "Δx x Δp = h/6π"],
    correct: 1
  },
  {
    id: 20,
    question: "If uncertainty in the position of an electron is zero, the uncertainty in its momentum would be",
    options: ["zero", "< h/ 2λ", "> h/ 2λ", "Infinite"],
    correct: 3
  },
  {
    id: 21,
    question: "How is the state of a quantum mechanical system completely specified?",
    options: ["By its position in space", "By its time", "By its wavefunction", "By its angular momentum"],
    correct: 2
  },
  {
    id: 22,
    question: "The wave function is an acceptable wave function if it is",
    options: ["finite everywhere", "continous everywhere", "single valued everywhere", "having all these properties"],
    correct: 3
  },
  {
    id: 23,
    question: "Schrodinger's time independent equation is applicable for the particles with",
    options: ["constant energy", "variable energy", "only constant potential energy", "all of these"],
    correct: 0
  },
  {
    id: 24,
    question: "The Steady-state form of Schrodinger wave equation is _____________",
    options: ["Linear", "Quadratic", "Cubic", "Nonlinear"],
    correct: 0
  },
  {
    id: 25,
    question: "The values of Energy for which Schrodinger's steady state equation can be solved is called as",
    options: ["Eigen Vectors", "Eigen Values", "Eigen Functions", "Operators"],
    correct: 1
  },
  {
    id: 26,
    question: "The Schrodinger wave equation is a",
    options: ["Linear differential equation", "Non-linear differential equation", "Second-order equation", "First-order equation"],
    correct: 0
  },
  {
    id: 27,
    question: "For a quantum wave particle, E = _____________",
    options: ["ℏ k", "ℏ ω", "ℏ ω/2", "ℏ k/2"],
    correct: 1
  },
  {
    id: 28,
    question: "Which of the following can be a wave function?",
    options: ["tan x", "sin x", "cot x", "sec x"],
    correct: 1
  },
  {
    id: 29,
    question: "Which of the following is not a characteristic of wave function?",
    options: ["Continuous", "Single valued", "Normalizable", "Multi valued"],
    correct: 3
  },
  {
    id: 30,
    question: "The total probability of finding the particle in space must be __________",
    options: ["zero", "unity", "infinity", "double"],
    correct: 1
  },
  {
    id: 31,
    question: "The normalized wave function must have ________ norm",
    options: ["Unit", "zero", "finite", "infinite"],
    correct: 0
  },
  {
    id: 32,
    question: "The square of the magnitude of the wave function is called_________",
    options: ["current density", "probability density", "Normalization", "volume density"],
    correct: 1
  },
  {
    id: 33,
    question: "According to the wave function and it first partial derivative should be _______ functions for all values of X",
    options: ["Zero", "Continous", "Infinity", "Discontinous"],
    correct: 1
  },
  {
    id: 34,
    question: "For E > 0, the particle has a ______ kinetic energy",
    options: ["Zero", "Positive", "Negative", "Infinity"],
    correct: 1
  },
  {
    id: 35,
    question: "According to Max Born's interpretation, |ψ|² represents",
    options: ["energy density", "particle density", "probability density", "charge density"],
    correct: 2
  },
  {
    id: 36,
    question: "In a one-dimensional infinite potential well, energy of the particle En =",
    options: ["n²h²/8mL²", "n²ħ²/8mL²", "n²h²/2mL²", "n²h²/4mL²"],
    correct: 0
  },
  {
    id: 37,
    question: "The energy corresponding to the lowest permitted energy level for a particle in an infinite potential well is called",
    options: ["Excited energy", "Zero-point energy", "Metastable state energy", "None of these"],
    correct: 1
  },
  {
    id: 38,
    question: "For a particle in the ground state in an one-dimensional potential well of width L and of infinite height, the probability of finding it will be maximum at a distance of",
    options: ["L/2 from the wall", "L/4 from the wall", "3L/4 from the wall", "L=0 from the wall"],
    correct: 0
  },
  {
    id: 39,
    question: "According to the particle in a box, the wave function of the particle lies in which region?",
    options: ["x > 0", "x < 0", "0 < x < L", "x > L"],
    correct: 2
  },
  {
    id: 40,
    question: "The Energy of the particle is proportional to __________",
    options: ["n", "n⁻¹", "n²", "n⁻²"],
    correct: 2
  },
  {
    id: 41,
    question: "The wave function shown in the figure for which quantum state corresponding to",
    options: ["Ground state", "First excited state", "Second excited state", "Third excited state"],
    correct: 1
  },
  {
    id: 42,
    question: "The de Broglie wavelength associated with a particle of mass 6.62 x 10⁻²⁹ kg travelling with a velocity 10⁵ ms⁻¹ is equal to",
    options: ["10 nm", "1 nm", "0.1 nm", "0.01nm"],
    correct: 2
  },
  {
    id: 43,
    question: "What is the energy of electron in terms of its ground state energy (E₁) when it jumps from n = 1 to n = 4 is",
    options: ["E₁/9", "E₁/16", "16 E₁", "4 E₁"],
    correct: 2
  },
  {
    id: 44,
    question: "An electron is trapped in a one dimensional potential well of width 1 Å. How much energy must be supplied to excite the electron from the ground state to second excited state?",
    options: ["4.82 x 10⁻¹⁷ J", "4.82 x 10⁻¹⁸ J", "1.81 x 10⁻¹⁷ J", "1.81 x 10⁻¹⁸ J"],
    correct: 0
  },
  {
    id: 45,
    question: "Calculate the deBroglie wavelength associated with an electron with a kinetic energy of 2000 eV is",
    options: ["2.74 Å", "0.274 Å", "27.4 Å", "0.0274 Å"],
    correct: 1
  },
  {
    id: 46,
    question: "The product of phase velocity and group velocity is equal to",
    options: ["particle velocity", "velocity of light", "square of velocity of light", "square root of velocity of light"],
    correct: 2
  },
  {
    id: 47,
    question: "Calculate the Zero-point energy for a particle in an infinite potential well for an electron confined to a 1 nm atom.",
    options: ["3.9 x10⁻²⁹ J", "4.9 X 10⁻²⁹ J", "5.9 X 10⁻²⁹ J", "6.9 X 10⁻²⁹ J"],
    correct: 2
  },
  {
    id: 48,
    question: "The de Broglie wavelength associated with an electron moving with a speed of 10⁵ m/s",
    options: ["0.727 Å", "7.27 Å", "72.7 Å", "727 Å"],
    correct: 2
  },
  {
    id: 49,
    question: "The ratio of energy of a photon with that of a neutron when both are associated with wavelength of 1 Å., given that the mass of neutron is 1.678 x 10⁻²⁷ Kg.",
    options: ["2.5 x10⁵", "1.5 X 10⁵", "0.5 X 10⁵", "3.5 X 10⁵"],
    correct: 1
  },
  {
    id: 50,
    question: "An electron is confirmed to move between two rigid walls separated by 20 Å. The de Broglie wavelength representing the ground state energy of an electron is (assume the potential to be zero)",
    options: ["0.6 Å", "0.2 Å", "0.4 Å", "0.8 Å"],
    correct: 2
  },

  // Unit II: Quantum Computing
  {
    id: 51,
    question: "In quantum computing, what is the basic unit of information?",
    options: ["Giga", "Qubit", "Bit", "Byte"],
    correct: 1
  },
  {
    id: 52,
    question: "What do we call the pieces of information in a quantum computer?",
    options: ["Bits", "Qubits", "Bytes", "Qubytes"],
    correct: 1
  },
  {
    id: 53,
    question: "When the information is between 0 and 1 in a quantum computer, what do we call this?",
    options: ["Superposition", "Same position", "Ordinary position", "Different position"],
    correct: 0
  },
  {
    id: 54,
    question: "Quantum computers are very good at dealing with_____",
    options: ["Clarity", "Certainty", "Uncertainty", "Reliability"],
    correct: 2
  },
  {
    id: 55,
    question: "What does 'entanglement' mean?",
    options: ["Two particles are different", "Two particles are separate", "Two particles are independent", "Two particles are connected"],
    correct: 3
  },
  {
    id: 56,
    question: "What can quantum computers be used for?",
    options: ["Artificial Intelligence", "Simulations/Predictions", "Both (A) and (B)", "Google Docs and Slides"],
    correct: 2
  },
  {
    id: 57,
    question: "When the two members of a Qubit pair exist in a single quantum state, it is known as ____________.",
    options: ["Entanglement", "Engagement", "Superposition", "None of the Above"],
    correct: 0
  },
  {
    id: 58,
    question: "Quantum computing is relatively _________ than classical computing.",
    options: ["Faster", "Slower", "Average", "None of the Above"],
    correct: 0
  },
  {
    id: 59,
    question: "Qubit stands for ________",
    options: ["Quality bits", "Question bit", "Quantum gates", "Quantum bit"],
    correct: 3
  },
  {
    id: 60,
    question: "A qubit is a _______quantum-mechanical system.",
    options: ["One-state", "Two-state", "Three-state", "Four-state"],
    correct: 1
  },
  {
    id: 61,
    question: "The set of vectors and set of scalars which follow the same properties followed by linear vector space is said be",
    options: ["Basis", "Dimension", "Hilbert space", "Orthogonal state"],
    correct: 2
  },
  {
    id: 62,
    question: "The process of replacing iᵗʰ row of the matrix by iᵗʰ column, is said to be",
    options: ["Conjugate Matrix", "Transpose Matrix", "Identity Matrix", "Hermitian Operator"],
    correct: 1
  },
  {
    id: 63,
    question: "The operators change with time while the state vectors remain constant, then it is said to be",
    options: ["Schrodinger representation", "Heisenberg representation", "Interaction representation", "None of the above"],
    correct: 1
  },
  {
    id: 64,
    question: "The operators remain constant while the state vectors change with time, then it is said to be",
    options: ["Schrodinger representation", "Heisenberg representation", "Interaction representation", "None of the above"],
    correct: 0
  },
  {
    id: 65,
    question: "The diagonal entries of a Hermitian matrix must be",
    options: ["Complex conjugate", "Real", "Both real & Complex conjugate", "None of the above"],
    correct: 1
  },
  {
    id: 66,
    question: "The eigen value of a Hermitian matrix must be",
    options: ["Complex conjugate", "Real", "Both real & Complex conjugate", "None of the above"],
    correct: 1
  },
  {
    id: 67,
    question: "What is a vector space?",
    options: ["A space consisting of only vectors", "A set of vectors closed under addition and scalar multiplication", "A space that includes both vectors and scalars", "A space that is always three-dimensional"],
    correct: 1
  },
  {
    id: 68,
    question: "What is the dimension of a vector space?",
    options: ["The size or length of a vector", "The number of vectors in the space", "The maximum number of linearly independent vectors that span the space", "The number of elements in the basis of the space"],
    correct: 2
  },
  {
    id: 69,
    question: "What is the span of a set of vectors?",
    options: ["The set of all vectors in the vector space", "The linear combination of all vectors in the set", "The set of vectors that are orthogonal to the given set", "The set of vectors that are linearly independent"],
    correct: 1
  },
  {
    id: 70,
    question: "In a finite-dimensional vector space, what is the maximum number of linearly independent vectors a basis can have?",
    options: ["0", "1", "The dimension of the vector space", "The size of the vector space"],
    correct: 2
  },
  {
    id: 71,
    question: "Moore's Law originally stated that the number of transistors on a microchip would double approximately every:",
    options: ["6 months", "1 year", "2 years", "5 years"],
    correct: 2
  },
  {
    id: 72,
    question: "What fundamental technology trend enabled the continuation of Moore's Law for several decades?",
    options: ["Miniaturization of transistors", "Increase in clock speed", "Expansion of data storage", "Advancements in software algorithms"],
    correct: 0
  },
  {
    id: 73,
    question: "Which component of a computer is primarily affected by Moore's Law?",
    options: ["Central Processing Unit (CPU)", "Random Access Memory (RAM)", "Hard Disk Drive (HDD)", "Graphics Processing Unit (GPU)"],
    correct: 0
  },
  {
    id: 74,
    question: "What is one of the main factors contributing to the end of Moore's Law?",
    options: ["Decreased demand for computing power", "Physical limits of miniaturization", "Lack of innovation in software development", "Increasing costs of semiconductor production"],
    correct: 1
  },
  {
    id: 75,
    question: "Which alternative approaches are being explored to extend computing power beyond the limits of Moore's Law?",
    options: ["Quantum computing", "Neuromorphic computing", "Optical computing", "All of these"],
    correct: 3
  },
  {
    id: 76,
    question: "What is the fundamental unit of information in quantum computing?",
    options: ["Bit", "Byte", "Qubit", "Quantum gate"],
    correct: 2
  },
  {
    id: 77,
    question: "In classical computing, information is processed using bits. What are the two possible values for a classical bit?",
    options: ["0 and 1", "True and False", "-1 and 1", "Red and Blue"],
    correct: 0
  },
  {
    id: 78,
    question: "Which property allows qubits to represent multiple states simultaneously in quantum computing?",
    options: ["Superposition", "Entanglement", "Interference", "Tunnelling"],
    correct: 0
  },
  {
    id: 79,
    question: "In a CNOT gate, you create a(n) _____ with two qubits.",
    options: ["Superposition", "Entangled state", "Bloch", "Hadamard"],
    correct: 1
  },
  {
    id: 80,
    question: "In a quantum circuit, this gate is used to place a qubit into superposition.",
    options: ["Hadamard", "X-gate", "Bloch", "CNOT"],
    correct: 0
  },
  {
    id: 81,
    question: "This quantum gate acts on a single qubit and would most be similar to a traditional NOT gate.",
    options: ["CNOT", "X-Gate", "Hadamard", "Deutsch Gate"],
    correct: 1
  },
  {
    id: 82,
    question: "What is superposition in quantum computing?",
    options: ["A state in which a qubit can exist in multiple states simultaneously", "The process of entangling multiple qubits", "A gate used to manipulate qubits", "A unit of quantum information"],
    correct: 0
  },
  {
    id: 83,
    question: "What happens to the entanglement of qubits when they are physically separated",
    options: ["The entanglement is lost", "The entanglement remains intact", "The entanglement becomes stronger", "The entanglement becomes weaker"],
    correct: 1
  },
  {
    id: 84,
    question: "What is the purpose of quantum gates in quantum computing?",
    options: ["To entangle qubits", "To collapse superposition", "To manipulate qubits", "To measure qubit states"],
    correct: 2
  },

  // Unit III: Conductors and Superconductors
  {
    id: 85,
    question: "Which of the following statement correctly describes a metal based on band theory?",
    options: ["A material possessing moderate band gap", "A material possessing a large band gap", "A material with zero band gap", "A material with infinite band gap"],
    correct: 2
  },
  {
    id: 86,
    question: "Solids with high value of conductivity are called:",
    options: ["Conductors", "Non-metal", "Insulator", "Semi-conductor"],
    correct: 0
  },
  {
    id: 87,
    question: "The electrons in valence band are",
    options: ["Freely moving inside the solid", "Tightly bonded inside the solid", "Lies in the innermost orbits and cannot be made free", "Lies in the outermost orbits and cannot be made free"],
    correct: 1
  },
  {
    id: 88,
    question: "Fermi level for a metal is",
    options: ["Highest energy level occupied by electrons at 0°C", "Average value of all available energy levels", "Highest energy level occupied by electrons at 0 K", "Addition of energy of all available electron energy levels"],
    correct: 2
  },
  {
    id: 89,
    question: "The free electron theory could not explain which of the following properties?",
    options: ["Electrical and thermal conductivity of metals", "Thermal and thermal conductivity of non-metal", "Ferromagnetism", "Ohm's law"],
    correct: 2
  },
  {
    id: 90,
    question: "Free electron theory is based on which of the following assumption?",
    options: ["Electrons are freely moving only at the center of the solid", "Electrons are freely moving through the entire solid", "Electrons can move freely only at the top surface of the solid", "Electrons can move freely only at the bottom surface of the solid"],
    correct: 1
  },
  {
    id: 91,
    question: "Which statement is correct regarding the influence of temperature on conductivity?",
    options: ["Conductivity of metals increases with increase in temperature", "Conductivity of metals decreases with increase in temperature", "Conductivity of metals does not change with temperature", "Conductivity of metals increases with square root of temperature"],
    correct: 1
  },
  {
    id: 92,
    question: "Mobility of electron is",
    options: ["Average flow of electrons per unit electric field.", "Average applied field per unit drift velocity.", "Average drift velocity per unit electric field.", "Reciprocal of conductivity per unit charge."],
    correct: 2
  },
  {
    id: 93,
    question: "Flow of electrons is affected by the following",
    options: ["Thermal vibrations", "Impurity atoms", "Crystal defects", "All the answers"],
    correct: 3
  },
  {
    id: 94,
    question: "Using the classical theory it can be shown that the electrical resistivity ρ and temperature T is given by,",
    options: ["ρ α T", "ρ α T⁻¹", "ρ α T¹/³", "ρ α T²"],
    correct: 0
  },
  {
    id: 95,
    question: "Matthiessens rule may be written as ρTot = ρphon +ρo, which of the following statement(s) is/are true? a. ρphon is temperature dependent b. ρo is temperature dependent c. ρo is due to lattice vibrations",
    options: ["(a) only", "(a) and (b)", "(b) only", "(c) only"],
    correct: 0
  },
  {
    id: 96,
    question: "Relaxation time may be defined as the time taken by an electron to reduce its velocity to_____ its initial value.",
    options: ["1/2", "1/3", "1/e", "1/2e"],
    correct: 2
  },
  {
    id: 97,
    question: "The average distance travelled by a free electron between two successive collisions with lattice ions of a metallic crystal is called",
    options: ["mean free path", "free path", "drift velocity", "mean collision time"],
    correct: 0
  },
  {
    id: 98,
    question: "According to Pauli's exclusion principle, an energy level can accommodate not more than_____ electrons.",
    options: ["one", "two", "three", "four"],
    correct: 1
  },
  {
    id: 99,
    question: "The probability of occupation of the electrons at any temperature is given as,",
    options: ["Option (i)", "Option (ii)", "Option (iii)", "Option (iv)"],
    correct: 2
  },
  {
    id: 100,
    question: "The relationship between current density J and electric field E is",
    options: ["J = σE", "J = σ / E", "J = σ/2E", "J = 1/ σ E"],
    correct: 0
  },
  {
    id: 101,
    question: "The drift velocity is described as",
    options: ["vd = eEτ/m", "vd = Eτ/m", "vd = eτ/m", "vd = eE/n"],
    correct: 0
  },
  {
    id: 102,
    question: "Which one is correct about classical free electron theory:",
    options: ["Free electrons are responsible for the electrical conductivity of metal", "Semiconductors can be explained properly", "Insulators can be explained properly", "Ohm's law cannot be derived using free electron theory"],
    correct: 0
  },
  {
    id: 103,
    question: "According to free electron theory",
    options: ["Valence electrons are tightly bound with the atom", "Valence electrons are weakly bound with the atom", "There are no free electrons in metal", "Some valence electrons are weakly bound and some tightly bound"],
    correct: 1
  },
  {
    id: 104,
    question: "Which one is correct about free electrons",
    options: ["valence electrons of metals move throughout the material.", "valence electrons of metals do not move throughout the material", "bound electrons of metals move throughout the material", "All electrons of metals move throughout the material"],
    correct: 0
  },
  {
    id: 105,
    question: "Electrons in conductors will follow",
    options: ["Bose-Einstein distribution", "Fermi-Dirac distribution", "Maxwell-Boltzmann distribution", "Boltzmann distribution"],
    correct: 1
  },
  {
    id: 106,
    question: "Which one will be correct about resistance in metal",
    options: ["Scattering of free electrons in a metal by structural defects and lattice vibrations", "Scattering of free electrons in a metal only by lattice vibrations", "Scattering of free electrons in a metal only by structural defects", "Scattering of free electrons in a metal by bound electrons"],
    correct: 0
  },
  {
    id: 107,
    question: "Which of the following about Fermi-Dirac distribution is false?",
    options: ["When E = EF, the probability of finding an electron with energy equal to the Fermi energy in a metal is ½ at any temperature.", "At T = 0 K all the energy level up to EF are occupied and all the energy levels above EF are empty.", "When T > 0 K, some levels above EF are partially filled while some levels below EF are partially empty.", "When T = 0 K, some levels above EF are partially filled while some levels below EF are empty."],
    correct: 3
  },
  {
    id: 108,
    question: "Examples of Fermions are",
    options: ["Electrons", "Photons", "Phonons", "Atoms"],
    correct: 0
  },
  {
    id: 109,
    question: "Which of the following assumptions of the quantum free electron theory is/are true. a) The energy values of the conduction electrons are quantized. b) The distribution of electrons in the various allowed energy levels occur as per Pauli's exclusion principle. c) The electrons travel with a constant potential inside the metal but confined within its boundaries.",
    options: ["(a) only", "(b) only", "(a) and (c)", "(a), (b) and (c)"],
    correct: 3
  },
  {
    id: 110,
    question: "According to quantum theory, the electrical conductivity of a metal is due to those free electrons which are",
    options: ["very close to Fermi level", "much below the Fermi level", "valence band", "None of the answers"],
    correct: 0
  },
  {
    id: 111,
    question: "The mobility of electrons in copper is 3.5 × 10⁻³ m²V⁻¹s⁻¹. For an applied electric field strength of 2 V/m, the drift velocity of the free electrons is",
    options: ["0.7 × 10⁻³ m/s", "7 × 10⁻³ m/s", "1.75 × 10⁻³ m/s", "7 × 10³ m/s"],
    correct: 1
  },
  {
    id: 112,
    question: "The mobility of electrons in copper 3×10³ m²V⁻¹s⁻¹ assuming e =1.6×10⁻¹⁹ C and me = 9.1×10⁻³¹ kg. the mean collision time is",
    options: ["16.2 × 10⁻¹³ s", "1.7 × 10⁻¹⁵ s", "1.8 × 10⁻¹⁵ s", "17.06 × 10⁻¹⁵ s"],
    correct: 3
  },
  {
    id: 113,
    question: "Using Fermi distribution function, the value of f(E) for (E – EF) = 0.01 eV at 200 K is",
    options: ["0.36", "0.64", "0.45", "0.55"],
    correct: 0
  },
  {
    id: 114,
    question: "A uniform silver wire has a resistivity of 1.54×10⁻⁸ Ωm at room temperature. For an electric field along the wire of 1 Vcm⁻¹, calculate (a) average drift velocity of electron and (b) mobility.",
    options: ["(a) 0.3 m/s and (b) 10.0 × 10⁻³ m²/Vs", "(a) 0.7 cm/s and (b) 70.0 × 10⁻³ m²/Vs", "(a) 3.0 m/s and (b) 17 × 10⁻³ m²/Vs", "(a) 0.7 m/s and (b) 7.0 × 10⁻³ m²/Vs"],
    correct: 3
  },
  {
    id: 115,
    question: "The magnetic lines of force cannot penetrate the body of a superconductor, a phenomenon is known as",
    options: ["Isotopic effect", "BCS theory", "Meissner effect", "Silsbee's effect"],
    correct: 2
  },
  {
    id: 116,
    question: "The minimum amount of current passed through the body of superconductor in order to destroy the superconductivity is called",
    options: ["Induced current", "Critical current", "Eddy current", "Hall current"],
    correct: 1
  },
  {
    id: 117,
    question: "In superconductivity the conductivity of a material becomes",
    options: ["Zero", "Finite", "Infinite", "None of the answers"],
    correct: 2
  },
  {
    id: 118,
    question: "In superconductors the temperature at which conductivity of a material becomes infinite is called",
    options: ["Critical temperature", "Absolute temperature", "Mean temperature", "Crystallization temperature"],
    correct: 0
  },
  {
    id: 119,
    question: "The superconducting state is perfectly _____ in nature.",
    options: ["Diamagnetic", "Paramagnetic", "Ferromagnetic", "Ferrimagnetic"],
    correct: 0
  },
  {
    id: 120,
    question: "The binding energy of a Cooper pair is of the order of _______",
    options: ["10⁻³ eV", "10³ eV", "10⁻³ J", "10³ J"],
    correct: 0
  },
  {
    id: 121,
    question: "The electron pairs in a superconductor are ______",
    options: ["Bosons", "Leptons", "Hydrons", "Fermions"],
    correct: 0
  },
  {
    id: 122,
    question: "The transition to normal state occurs abruptly at a critical magnetic field (Hc) in",
    options: ["Type-I superconductor", "Type-II superconductor", "Both Type-I and Type-II superconductors", "Conductors"],
    correct: 0
  },
  {
    id: 123,
    question: "The magnetic susceptibility (χ) in superconductor is",
    options: ["positive", "zero", "negative", "infinity"],
    correct: 2
  },
  {
    id: 124,
    question: "Hard superconductors are also called as __________",
    options: ["Type-I superconductor", "Type-II superconductor", "Both Type-I and Type-II superconductors", "Conductors"],
    correct: 1
  },
  {
    id: 125,
    question: "Silsbee's rule gives the relation between",
    options: ["current and critical temperature", "current and critical magnetic field", "current and isotopic mass", "critical current and critical magnetic field."],
    correct: 3
  },

  // Unit IV: Semiconductors
  {
    id: 126,
    question: "Solids with high value of conductivity are called:",
    options: ["Conductors", "Non-metal", "Insulator", "Semi-conductor"],
    correct: 0
  },
  {
    id: 127,
    question: "Fermi level for a metal is",
    options: ["Highest energy level occupied by electrons at 0°C", "Average value of all available energy levels", "Highest energy level occupied by electrons at 0 K", "Addition of energy of all available electron energy levels"],
    correct: 2
  },
  {
    id: 128,
    question: "The probability of occupation of the electrons at any temperature is given as,",
    options: ["Option (a)", "Option (b)", "Option (c)", "Option (d)"],
    correct: 2
  },
  {
    id: 129,
    question: "The relationship between current density J and electric field E is",
    options: ["J = σE", "J = σ / E", "J = σ/2E", "J = 1/ σ E"],
    correct: 0
  },
  {
    id: 130,
    question: "Intrinsic semiconductors are those",
    options: ["Which are made of semiconductor material in its purest form", "Which have zero energy gap", "Which have more electrons than holes", "Which are available locally"],
    correct: 0
  },
  {
    id: 131,
    question: "A pure semiconductor behaves like an insulator at 0 K because",
    options: ["There is no recombination of electrons with holes", "Drift velocity of free electrons is very small", "Free electrons are not available for current conduction", "Energy possessed by electrons at that low temperature is almost zero"],
    correct: 2
  },
  {
    id: 132,
    question: "Which of the following about Fermi-Dirac distribution is false?",
    options: ["When E = EF, the probability of finding an electron with energy equal to the Fermi energy in a metal is ½ at all temperatures.", "At T = 0 K all the energy level up to EF are occupied and all the energy levels above EF are empty.", "When T > 0 K, some levels above EF are partially filled while some levels below EF are partially empty.", "When T = 0 K, some levels above EF are partially filled while some levels below EF are empty."],
    correct: 3
  },
  {
    id: 133,
    question: "Examples of Fermions are",
    options: ["Electrons", "Photons", "Phonons", "Atoms"],
    correct: 0
  },
  {
    id: 134,
    question: "Using Fermi distribution function, the value of f(E) for (E – EF) = 0.01 eV at 200 K is",
    options: ["0.36", "0.64", "0.45", "0.55"],
    correct: 0
  },
  {
    id: 135,
    question: "An elemental semiconductor is formed by ……… bonds.",
    options: ["Covalent", "Electrovalent", "Co-ordinate", "Ionic"],
    correct: 0
  },
  {
    id: 136,
    question: "A semiconductor has ………… temperature coefficient of resistance.",
    options: ["Positive", "Zero", "Negative", "Infinite"],
    correct: 2
  },
  {
    id: 137,
    question: "The most commonly used semiconductor is ………..",
    options: ["Gallium", "Silicon", "Carbon", "Arsenide"],
    correct: 1
  },
  {
    id: 138,
    question: "A semiconductor has generally ……………… valence electrons.",
    options: ["2", "3", "6", "4"],
    correct: 3
  },
  {
    id: 139,
    question: "When a pentavalent impurity is added to a pure semiconductor, it becomes ………",
    options: ["An insulator", "An intrinsic semiconductor", "p-type semiconductor", "n-type semiconductor"],
    correct: 3
  },
  {
    id: 140,
    question: "Addition of pentavalent impurity to a semiconductor creates …….",
    options: ["Donor electrons", "Holes", "Valence electrons", "Bound electrons"],
    correct: 0
  },
  {
    id: 141,
    question: "A pentavalent impurity has ………. valence electrons",
    options: ["3", "5", "4", "6"],
    correct: 1
  },
  {
    id: 142,
    question: "An n-type semiconductor is ………",
    options: ["Positively charged", "Negatively charged", "Electrically neutral", "None of the answers"],
    correct: 2
  },
  {
    id: 143,
    question: "A trivalent impurity has ….. valence electrons",
    options: ["4", "5", "6", "3"],
    correct: 3
  },
  {
    id: 144,
    question: "Addition of trivalent impurity to a semiconductor creates …….",
    options: ["Holes", "Donor electrons", "Valence electrons", "Bound electrons"],
    correct: 0
  },
  {
    id: 145,
    question: "A hole in a semiconductor is defined as …………….",
    options: ["A free electron", "Electron vacancy", "A free proton", "A free neutron"],
    correct: 1
  },
  {
    id: 146,
    question: "As the doping to a pure semiconductor increases, the bulk resistance of the semiconductor ………..",
    options: ["Remains the same", "Increases", "Decreases", "Becomes zero"],
    correct: 2
  },
  {
    id: 147,
    question: "In an intrinsic semiconductor, current conduction is due to …….",
    options: ["Only holes", "Only electrons", "Both holes and electrons", "None of the answers"],
    correct: 2
  },
  {
    id: 148,
    question: "When a pure semiconductor is heated, its resistance ………….",
    options: ["Increases", "Decreases", "Remains the same", "Can't say"],
    correct: 1
  },
  {
    id: 149,
    question: "In an intrinsic semiconductor, the number of free electrons ………",
    options: ["Equals the number of holes", "Is greater than the number of holes", "Is less than the number of holes", "None of the answers"],
    correct: 0
  },
  {
    id: 150,
    question: "At room temperature, an intrinsic semiconductor has ……….",
    options: ["Holes only", "Electrons and holes", "Electrons only", "No holes and no electrons"],
    correct: 1
  },
  {
    id: 151,
    question: "At absolute temperature, an intrinsic semiconductor has ……….",
    options: ["A few free electrons", "Many holes", "Many free electrons", "No holes and no free electrons"],
    correct: 3
  },
  {
    id: 152,
    question: "Which of the following is known as indirect band gap semiconductors?",
    options: ["Germanium", "GaAs", "GaAsP", "Carbon"],
    correct: 0
  },
  {
    id: 153,
    question: "Which of the following is a semiconductor",
    options: ["Diamond", "Arsenic", "Phosphorous", "Gallium arsenide"],
    correct: 3
  },
  {
    id: 154,
    question: "In an intrinsic semiconductor, the Fermi level",
    options: ["Lies at the middle of the forbidden energy gap.", "Is near the conduction band.", "Is near the valence band.", "May be anywhere in the forbidden energy gap."],
    correct: 0
  },
  {
    id: 155,
    question: "For silicon, the energy gap at 300 K is",
    options: ["0.7 J", "1.1 J", "1.1 eV", "0.7 eV"],
    correct: 2
  },
  {
    id: 156,
    question: "The forbidden gap for germanium is,",
    options: ["0.7 J", "0.7 eV", "1.1 eV", "1.1 J"],
    correct: 1
  },
  {
    id: 157,
    question: "In a N-type semiconductor, the position of Fermi-level is",
    options: ["Close to the valance band", "in the middle of the energy band gap", "close to the conduction band", "Can be any where"],
    correct: 2
  },
  {
    id: 158,
    question: "The mobility of electrons in a material is expressed in unit of:",
    options: ["V/s", "m²/V-s", "m²/s", "J/K"],
    correct: 1
  },
  {
    id: 159,
    question: "The energy gap in a semiconductor",
    options: ["Increases with temperature", "Does not change with temperature", "Decreases with temperature", "Is zero"],
    correct: 1
  },
  {
    id: 160,
    question: "Donor impurity atoms in semiconducting material results a new",
    options: ["Wide energy band", "Narrow energy band", "Discrete energy level just below conduction band", "Discrete energy level just above valance band"],
    correct: 2
  },
  {
    id: 161,
    question: "Hall Effect is clearly visible in _______________",
    options: ["Insulators", "Semiconductors", "Super conductors", "Non metals"],
    correct: 1
  },
  {
    id: 162,
    question: "Which of the following represents correct expression for Lorentz force?",
    options: ["BeV", "BV", "eV", "B"],
    correct: 0
  },
  {
    id: 163,
    question: "Hall effect can be used to measure",
    options: ["Magnetic field intensity", "Mobility", "Carrier concentration", "All the answers"],
    correct: 3
  },
  {
    id: 164,
    question: "Which of the following parameters can't be found with Hall Effect?",
    options: ["Type of semiconductors (p or n type)", "Conductivity", "Carrier concentration", "Area of the device"],
    correct: 3
  },
  {
    id: 165,
    question: "In the Hall Effect, the electric field is in X direction and the velocity is in Y direction. Then the direction of the magnetic field is",
    options: ["X", "Y", "Z", "XY plane"],
    correct: 2
  },
  {
    id: 166,
    question: "The number of electrons in a semiconductor is 10²⁰. Then the Hall coefficient is",
    options: ["0.625", "0.0625", "6.25", "62.5"],
    correct: 1
  },
  {
    id: 167,
    question: "Calculate the conductivity of silicon doped with 10²¹ atoms m⁻³ of boron if the mobility of holes is 0.048 m²v⁻¹s⁻¹.",
    options: ["76.8/Ωm", "7.68/Ωm", "7.68 Ωm", "0.768/Ωm"],
    correct: 1
  },
  {
    id: 168,
    question: "Calculate the resistivity of intrinsic germanium if the intrinsic carrier density is 2.5 x 10¹⁹ m⁻³ assuming electron and hole mobilities of 0.38 and 0.18 m²v⁻¹s⁻¹ respectively.",
    options: ["0.45/Ωm", "0.045 Ωm", "0.45 Ωm", "4.50 Ωm"],
    correct: 2
  },
  {
    id: 169,
    question: "A semiconductor sample of thickness 1.2 x 10⁻⁴m is placed in a magnetic field of 0.2T acting perpendicular to its thickness. The Hall voltage generated when a current of 100 mA passes through it is (Assume the carrier concentration to be 10²³ m⁻³)",
    options: ["0.123 V", "0.0123 V", "1.23 V", "0.0012 V"],
    correct: 1
  },
  {
    id: 170,
    question: "Intrinsic silicon has a carrier concentration of 1.1 x 10¹⁶ m⁻³. If the mobilities of electrons and holes are 0.17 and 0.035 m²v⁻¹s⁻¹ respectively at room temperature, the resistivity of silicon is",
    options: ["0.277x10³ Ωm", "27.7x10³ Ωm", "2.77x10³ Ωm", "0.0277x10³ Ωm"],
    correct: 2
  },
  {
    id: 171,
    question: "The compound gallium arsenide has an intrinsic conductivity of 10⁻⁶ ohm⁻¹ m⁻¹ at 20°C. How many electrons have jumped the forbidden energy gap? [Given: μe = 0.88 m²V⁻¹s⁻¹ and μh = 0.04 m²V⁻¹s⁻¹]",
    options: ["6.79 x10³ m⁻³", "0.679 x10³ m⁻³", "67.9 x10³ m⁻³", "0.0679 x10³ m⁻³"],
    correct: 0
  },
  {
    id: 172,
    question: "Measurement of Hall coefficient enables the determination of :",
    options: ["Temperature coefficient and thermal conductivity", "Mobility and carrier concentration", "Fermi level and forbidden energy gap", "Area of the device"],
    correct: 1
  },
  {
    id: 173,
    question: "For a particular material, the Hall coefficient is found to be zero. The material is",
    options: ["Intrinsic semiconductor", "Extrinsic semiconductor", "Metal", "Insulator"],
    correct: 3
  },
  {
    id: 174,
    question: "What happens to the Hall voltage in a conductor if the magnetic field is reversed (i.e., its direction is flipped)?",
    options: ["The Hall voltage becomes zero.", "The Hall voltage changes direction but remains the same magnitude.", "The Hall voltage doubles in magnitude.", "The Hall voltage remains unchanged."],
    correct: 1
  },
  {
    id: 175,
    question: "In which direction does the Hall voltage develop in a conductor when a magnetic field is applied perpendicular to the current?",
    options: ["Parallel to the current direction", "Perpendicular to both the magnetic field and the current direction", "In the same direction as the magnetic field", "Opposite to the magnetic field direction"],
    correct: 1
  },
  {
    id: 176,
    question: "An intrinsic semiconductor, at the absolute zero temperature, behaves like which one of the following?",
    options: ["Insulator", "Superconductor", "n-type semiconductor", "p-type semiconductor"],
    correct: 0
  },
  {
    id: 177,
    question: "In intrinsic semiconductors, number of electrons is ___________ number of holes",
    options: ["equal to", "greater than", "less than", "none of the above"],
    correct: 0
  },
  {
    id: 178,
    question: "When a pure semiconductor is heated, its resistance",
    options: ["goes up", "goes down", "remains the same", "none of the above"],
    correct: 1
  },
  {
    id: 179,
    question: "Intrinsic semiconductor at room temperature will have ______available for conduction.",
    options: ["Electrons", "Holes", "Both electrons and holes", "None of the above"],
    correct: 2
  },
  {
    id: 180,
    question: "The density of charge carriers in a pure semiconductor is proportional to",
    options: ["exp(-Eg/kT)", "exp(-2Eg/kT)", "exp((-Eg/kT²)", "exp(-Eg/2kT)"],
    correct: 3
  },
  {
    id: 181,
    question: "In an intrinsic semiconductor",
    options: ["σ = n e μe e", "σ = n h μh e", "σ = ni e (μe+μh)", "ne μe e > nh μh e"],
    correct: 2
  },
  {
    id: 182,
    question: "A semiconductor has generally ……………… valence electrons.",
    options: ["2", "3", "4", "5"],
    correct: 2
  },
  {
    id: 183,
    question: "A semiconductor has ………… temperature coefficient of resistance.",
    options: ["Positive", "Negative", "Both positive and negative", "Infinite"],
    correct: 1
  },
  {
    id: 184,
    question: "Which of the following statements about the Hall effect in is true?",
    options: ["The Hall effect cannot occur in semiconductors", "The Hall effect occurs only in metals.", "The Hall effect can provide information about the concentration and type of charge carriers", "The Hall effect is observed only at very low temperatures"],
    correct: 2
  },
  {
    id: 185,
    question: "What is the primary function of a solar cell?",
    options: ["To store solar energy in chemical form", "To reflect sunlight to solar heaters", "To convert sunlight directly into electrical energy", "To absorb and retain heat from sunlight"],
    correct: 2
  },

  // Unit V: Lasers & Optical Fibers
  {
    id: 186,
    question: "Important characteristic of laser beam is",
    options: ["Interference", "Diffraction", "Dispersion", "Coherence"],
    correct: 3
  },
  {
    id: 187,
    question: "Emission of a photon by an excited atom due to interaction with a passing photon nearby is called",
    options: ["Spontaneous emission", "Induced absorption", "Stimulated emission", "Thermionic emission"],
    correct: 2
  },
  {
    id: 188,
    question: "Metastable states are",
    options: ["Ground state energy states.", "Excited state energy levels in which electrons stay for very short interval of time.", "Excited state energy levels in which electron can stay for unusually long time.", "Nuclear energy states."],
    correct: 2
  },
  {
    id: 189,
    question: "The required condition to achieve laser action in a system is",
    options: ["State of population inversion", "Excitation source", "A resonant cavity", "All the three"],
    correct: 3
  },
  {
    id: 190,
    question: "The purpose of the optical cavity in a laser is to:",
    options: ["Convert electrical energy into light", "Amplify the light through multiple passes between mirrors", "Filter out unwanted frequencies of light", "Focus the light into a beam"],
    correct: 1
  },
  {
    id: 191,
    question: "In a laser, the mirrors are there on either side of the device",
    options: ["In order to filter the heat & leave out only the light.", "To protect the eyes of the observer.", "To save energy of the excitation source.", "So that same photons continue to cause further batches of stimulated transitions."],
    correct: 3
  },
  {
    id: 192,
    question: "Nd:YAG laser is a",
    options: ["Two level laser", "Three level laser", "Four level laser", "Five level laser"],
    correct: 2
  },
  {
    id: 193,
    question: "In He-Ne laser, the ratio of He to Ne gas molecules is of the order",
    options: ["1:10", "1:1", "10:1", "100:1"],
    correct: 2
  },
  {
    id: 194,
    question: "The pumping source in Nd:YAG laser is",
    options: ["Chemical", "Optical", "Electrical", "Mechanical"],
    correct: 1
  },
  {
    id: 195,
    question: "Which color of light has the shortest wavelength ?",
    options: ["Yellow", "Blue", "Red", "Green"],
    correct: 1
  },
  {
    id: 196,
    question: "Laser action is found in _________ semiconductor.",
    options: ["direct band gap", "indirect band gap", "germanium", "silicon"],
    correct: 0
  },
  {
    id: 197,
    question: "The light from a laser source is monochromatic because all the photons",
    options: ["are in phase", "have same energy", "have same amplitude", "are in the same direction"],
    correct: 1
  },
  {
    id: 198,
    question: "Which one of the following statements best describes stimulated emission in a laser?",
    options: ["Electrons collide with atoms in a metastable state and cause photons to be emitted.", "Atoms in a metastable state de-excite and cause electrons to be emitted.", "Photons interact with atoms in a metastable state and cause photons to be emitted.", "Photons interact with atoms in a metastable state and cause electrons to be emitted."],
    correct: 2
  },
  {
    id: 199,
    question: "Which of the following is an example of optical pumping?",
    options: ["Nd:YAG", "Helium-Neon laser", "Semiconductor laser", "Dye laser"],
    correct: 0
  },
  {
    id: 200,
    question: "Why is laser light monochromatic?",
    options: ["The excited electrons are in a metastable state.", "The system is in a state of population inversion.", "The emitted photon and incident photon are of the same phase.", "Photons of the same energy as that of the incident photons are emitted when the electrons transit down from a higher energy level."],
    correct: 3
  },
  {
    id: 201,
    question: "Which of the following statements concerning a laser system is incorrect?",
    options: ["Spontaneous emission occurs in the laser system.", "The intensity of the laser beam can be varied by changing the reflective coefficient of the partially reflecting mirror.", "The laser system does not require an external energy source.", "The laser medium consists of a metastable state."],
    correct: 2
  },
  {
    id: 202,
    question: "The active medium in Nd:YAG laser is",
    options: ["Neodymium", "YAG crystal", "Yttrium", "Aluminium"],
    correct: 0
  },
  {
    id: 203,
    question: "The number of atoms in the excited state becomes much greater than the number of atoms in the ground state. This is known as",
    options: ["normal population", "population inversion", "stimulated emission", "spontaneous emission"],
    correct: 1
  },
  {
    id: 204,
    question: "Laser light is intense because",
    options: ["it has very less number of Photons that in phase", "it has very less number of Photons that are not in phase", "it has very large number of Photons that are in phase", "it has very large number of Photons that are not in phase"],
    correct: 2
  },
  {
    id: 205,
    question: "The emission of photon without being aided by any external agency is called",
    options: ["light amplification", "induced absorption", "stimulated emission", "spontaneous emission"],
    correct: 3
  },
  {
    id: 206,
    question: "The lifetime of an atom at the ordinary excited state is of the order of",
    options: ["few millisecond", "few nanosecond", "few microsecond", "unlimited"],
    correct: 1
  },
  {
    id: 207,
    question: "The lifetime of an atom in a metastable state is of the order of",
    options: ["a few second", "Unlimited", "A nanosecond", "Few millisecond"],
    correct: 3
  },
  {
    id: 208,
    question: "Supply of energy to atoms for excitation is called",
    options: ["Glowing", "Bombarding", "Incidenting", "Pumping"],
    correct: 3
  },
  {
    id: 209,
    question: "Semiconductor lasers do not require two external mirrors to form an optical cavity because",
    options: ["the laser light required is of low power", "mere driving a minimum current in the diode is enough for laser action", "p-section acts as one mirror and n-section acts as the other mirror", "a pair of parallel planes cleaved or polished at a particular angle in the crystal reflect the light efficiently"],
    correct: 3
  },
{
    id: 210,
    question: "A semiconductor laser has a peak emission radiation of wavelength 1.24 μm. What is its band gap value in eV?",
    options: ["1.4 eV", "1.6 eV", "1 eV", "1.8 eV"],
    correct: 2
  },
  {
    id: 211,
    question: "A He-Ne laser emits light at a wavelength of 632.8 nm and has an output power of 5 mW. The number of photons emitted in each second by this laser are",
    options: ["1.79 x 10¹⁸ Photons/sec", "1.59 x 10¹⁶ Photons/sec", "0.6 x 10¹⁶ photons/sec", "1.59 x 10¹⁸ photons/sec"],
    correct: 1
  },
  {
    id: 212,
    question: "If the wavelength of light emitted by spontaneous emission is 696 nm at 300K, the ratio of population of two energy levels is",
    options: ["1.059 x 10⁻³²", "1.059 x 10⁻³³", "0.059 x 10⁻³⁰", "1.059 x 10⁻³⁰"],
    correct: 3
  },
  {
    id: 213,
    question: "If a pulsed laser emits photons of wavelength 780 nm with 20 mW average power/pulse, the number of photons contained in each pulse if the pulse duration is 10 ns is",
    options: ["7.86 x 10⁸", "5.08 x 10⁸", "3.86 x 10⁸", "1.86 x 10⁸"],
    correct: 0
  },
  {
    id: 214,
    question: "The wavelength of radiation emitted by a semiconducting laser with band gap energy 2.8eV.",
    options: ["2.8 Å", "4.3308 Å", "5548.4 Å", "4439.8 Å"],
    correct: 3
  },
  {
    id: 215,
    question: "Optical fiber works on the phenomenon of _______",
    options: ["total internal reflection", "polarization", "diffraction", "refraction"],
    correct: 0
  },
  {
    id: 216,
    question: "What is the other name for a maximum external incident angle?",
    options: ["Optical angle", "Total internal reflection angle", "Refraction angle", "Wave guide acceptance angle"],
    correct: 3
  },
  {
    id: 217,
    question: "How does the refractive index vary in Graded Index fibre?",
    options: ["Tangentially", "Radially", "Longitudinally", "Transversely"],
    correct: 1
  },
  {
    id: 218,
    question: "Which of the following has more distortion?",
    options: ["Single step-index fibre", "Graded index fibre", "Multimode step-index fibre", "Glass fibre"],
    correct: 2
  },
  {
    id: 219,
    question: "What causes microscopic bend?",
    options: ["Absorption", "Scattering", "Impurities", "Non-uniform pressure"],
    correct: 3
  },
  {
    id: 220,
    question: "The loss in signal power as light travels down a fiber is called",
    options: ["Dispersion", "Scattering", "Absorption", "Attenuation"],
    correct: 3
  },
  {
    id: 221,
    question: "The inner portion of the optical fiber cable is called",
    options: ["Cladding", "Coating", "Inner conductor", "Core"],
    correct: 3
  },
  {
    id: 222,
    question: "When more than one mode is propagating, how is it dispersed?",
    options: ["Dispersion", "Inter-modal dispersion", "Material dispersion", "Waveguide dispersion"],
    correct: 1
  },
  {
    id: 223,
    question: "The core of an optical fiber has a",
    options: ["Lower refracted index than air", "Lower refractive index than the cladding", "Higher refractive index than the cladding", "Similar refractive index with the cladding"],
    correct: 2
  },
  {
    id: 224,
    question: "Having cladding around the core is preferred to coating the core with a reflecting material(silvering) because",
    options: ["Silvering is not economical", "Coating may get affected by abrasions", "Coated material may undergo chemical changes in the field conditions and thus become dull", "The total internal reflection at the core-cladding interface is superior to the one by any coated material"],
    correct: 3
  },
  {
    id: 225,
    question: "Attenuation means",
    options: ["Amplification of signal strength", "Division of signal strength", "Loss of signal strength", "Tuning of signal"],
    correct: 2
  },
  {
    id: 226,
    question: "In an optical fiber the signal loss due to scattering is mainly due to",
    options: ["Rayleigh scattering", "Raman scattering", "Wein's scattering", "All the answers"],
    correct: 0
  },
  {
    id: 227,
    question: "In an optical fiber, Rayleigh scattering occurs when a photon",
    options: ["Encounters an impurity atom in its path", "Hits the cladding", "Encounters sharp changes in refractive index over distances smaller than its wavelength", "Encounters a microscopic bend"],
    correct: 2
  },
  {
    id: 228,
    question: "Signal distortion occurs due to",
    options: ["Irregularities in fiber structure", "Variation in refractive index of the core at different points", "Spreading of pulse", "Macroscopic bend"],
    correct: 2
  },
  {
    id: 229,
    question: "The numerical aperture of an optical fiber in air is 0.32. The numerical aperture of an optical fiber in water of R.I. 1.33 is",
    options: ["0.43", "0.32", "0.64", "0.96"],
    correct: 1
  },
  {
    id: 230,
    question: "The numerical aperture of a fiber if the angle of acceptance is 15 degrees, is",
    options: ["0.17", "0.26", "0.50", "0.75"],
    correct: 1
  },
  {
    id: 231,
    question: "Fractional index change for an optical fiber with core and cladding of refractive indices 1.563 and 1.498 respectively is",
    options: ["0.00415", "0.04159", "0.04300", "0.00400"],
    correct: 1
  },
  {
    id: 232,
    question: "The angle of acceptance of an optical fiber with numerical aperture of 0.446 is",
    options: ["26.49°", "7.78°", "20.5°", "30.6°"],
    correct: 0
  },
  {
    id: 233,
    question: "An optical signal loses 15% of its power after traversing a fiber length of 400 m. The fiber loss is",
    options: ["0.0176", "1.7645", "17.645", "0.1764"],
    correct: 1
  },
  {
    id: 234,
    question: "The attenuation in an optical fiber of length 500 m, when a light signal of power 100 mW emerges out of the fiber with a power of 90 mW is",
    options: ["0.0915 dB/km", "0.00915dB/km", "9.15 dB/km", "0.915 dB/km"],
    correct: 3
  },
  {
    id: 235,
    question: "Optical fibers are used in",
    options: ["CAT scans", "X-ray photos", "Ultrasound scans", "Endoscopy"],
    correct: 3
  },
  {
    id: 236,
    question: "Which fiber is preferred for long distance communication?",
    options: ["Step index single mode fiber", "Graded index multimode fiber", "Step index multimode fiber", "Both single mode and multimode fibers."],
    correct: 0
  },
  {
    id: 237,
    question: "In the structure of the fiber optic cable, the refractive index of the core is always ____ the refractive index of the cladding",
    options: ["Less than", "Equal to", "Greater than", "None of these"],
    correct: 2
  },
  {
    id: 238,
    question: "The numerical aperture (NA) in optical fiber is used to describe",
    options: ["Light spreading ability", "Light gathering or light-collecting ability", "Light output from an external shield", "Light leakage ability"],
    correct: 1
  },
  {
    id: 239,
    question: "The refractive index of the core is uniform throughout and undergoes an abrupt change at the cladding boundary which is known as______",
    options: ["Uniform-index fiber", "Scale-index fiber", "Graded-index fiber", "Step index fiber"],
    correct: 3
  },
  {
    id: 240,
    question: "Emission of a photon by an excited atom due to interaction with a passing photon nearby is called",
    options: ["Spontaneous emission", "Induced absorption", "Stimulated emission", "Thermionic emission"],
    correct: 2
  },
  {
    id: 241,
    question: "In a laser, the mirrors are used on either side of the device",
    options: ["In order to filter the heat & leave out only the light.", "To protect the eyes of the observer", "So that same photons continue to cause further batches of stimulated transitions", "To save energy of the excitation source"],
    correct: 2
  },
  {
    id: 242,
    question: "The loss in signal power as light travels down a fiber is called",
    options: ["Dispersion", "Scattering", "Absorption", "Attenuation"],
    correct: 3
  }  
];

        this.currentQuestions = [];
        this.currentQuestionIndex = 0;
        this.answers = {};
        this.timeRemaining = 15 * 60; 
        this.timer = null;
        this.startTime = null;
        this.studentName = '';

        this.initializeEventListeners();
    }

    initializeEventListeners() {
        const startBtn = document.getElementById('startQuizBtn');
        const adminBtn = document.getElementById('adminLoginBtn');
        
        if (startBtn) {
            startBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.startQuiz();
            });
        }

        if (adminBtn) {
            adminBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.showAdminModal();
            });
        }

        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const submitBtn = document.getElementById('submitBtn');

        if (prevBtn) prevBtn.addEventListener('click', () => this.previousQuestion());
        if (nextBtn) nextBtn.addEventListener('click', () => this.nextQuestion());
        if (submitBtn) submitBtn.addEventListener('click', () => this.submitQuiz());

        const reviewBtn = document.getElementById('reviewAnswersBtn');
        const newQuizBtn = document.getElementById('newQuizBtn');

        if (reviewBtn) reviewBtn.addEventListener('click', () => this.showReview());
        if (newQuizBtn) newQuizBtn.addEventListener('click', () => this.newQuiz());

        const backBtn = document.getElementById('backToResultsBtn');
        if (backBtn) backBtn.addEventListener('click', () => this.showResults());

        const adminLoginSubmit = document.getElementById('adminLoginSubmit');
        const adminModalClose = document.getElementById('adminModalClose');
        const logoutBtn = document.getElementById('logoutBtn');
        const exportBtn = document.getElementById('exportBtn');

        if (adminLoginSubmit) adminLoginSubmit.addEventListener('click', () => this.adminLogin());
        if (adminModalClose) adminModalClose.addEventListener('click', () => this.hideAdminModal());
        if (logoutBtn) logoutBtn.addEventListener('click', () => this.adminLogout());
        if (exportBtn) exportBtn.addEventListener('click', () => this.exportCSV());

        const nameInput = document.getElementById('studentName');
        if (nameInput) {
            nameInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.startQuiz();
                }
            });
            
            nameInput.addEventListener('click', () => {
                nameInput.focus();
            });
        }
    }

    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    shuffleQuestionOptions(question) {
        const shuffled = { ...question };
        const optionsWithIndex = question.options.map((option, index) => ({ option, originalIndex: index }));
        const shuffledOptions = this.shuffleArray(optionsWithIndex);
        
        shuffled.options = shuffledOptions.map(item => item.option);
        shuffled.correct = shuffledOptions.findIndex(item => item.originalIndex === question.correct);
        
        return shuffled;
    }

    prepareRandomQuestions() {
        const shuffledQuestions = this.shuffleArray(this.questions);
        const selectedQuestions = shuffledQuestions.slice(0, 20);
        
        this.currentQuestions = selectedQuestions.map(q => this.shuffleQuestionOptions(q));
        
        this.currentQuestions = this.shuffleArray(this.currentQuestions);
    }

    startQuiz() {
        const nameInput = document.getElementById('studentName');
        
        if (!nameInput || !nameInput.value.trim()) {
            alert('Please enter your name before starting the quiz.');
            if (nameInput) nameInput.focus();
            return;
        }

        this.studentName = nameInput.value.trim();
        this.prepareRandomQuestions();
        this.currentQuestionIndex = 0;
        this.answers = {};
        this.timeRemaining = 15 * 60;
        this.startTime = Date.now();

        this.showScreen('quizScreen');
        this.displayQuestion();
        this.startTimer();
    }

    startTimer() {
        if (this.timer) {
            clearInterval(this.timer);
        }
        
        this.timer = setInterval(() => {
            this.timeRemaining--;
            this.updateTimerDisplay();

            if (this.timeRemaining <= 5 * 60) { // 5 minutes warning
                const timerElement = document.getElementById('timer');
                if (timerElement) {
                    timerElement.classList.add('warning');
                }
            }

            if (this.timeRemaining <= 0) {
                this.submitQuiz();
            }
        }, 1000);
    }

    updateTimerDisplay() {
        const timerElement = document.getElementById('timer');
        if (timerElement) {
            const minutes = Math.floor(this.timeRemaining / 60);
            const seconds = this.timeRemaining % 60;
            timerElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        }
    }

    displayQuestion() {
        const question = this.currentQuestions[this.currentQuestionIndex];
        const questionNumber = this.currentQuestionIndex + 1;

        // Update question counter
        const counterElement = document.getElementById('questionCounter');
        if (counterElement) {
            counterElement.textContent = `Question ${questionNumber} of 20`;
        }

        // Update question text
        const questionTextElement = document.getElementById('questionText');
        if (questionTextElement) {
            questionTextElement.textContent = question.question;
        }

        // Update options
        const optionsContainer = document.getElementById('optionsContainer');
        if (optionsContainer) {
            optionsContainer.innerHTML = '';

            question.options.forEach((option, index) => {
                const optionDiv = document.createElement('div');
                optionDiv.className = 'option';
                
                const radio = document.createElement('input');
                radio.type = 'radio';
                radio.name = 'answer';
                radio.value = index;
                radio.id = `option${index}`;

                const label = document.createElement('label');
                label.htmlFor = `option${index}`;
                label.textContent = option;

                optionDiv.appendChild(radio);
                optionDiv.appendChild(label);

                if (this.answers[question.id] === index) {
                    radio.checked = true;
                    optionDiv.classList.add('selected');
                }

                optionDiv.addEventListener('click', () => {
                    optionsContainer.querySelectorAll('.option').forEach(opt => {
                        opt.classList.remove('selected');
                    });
                    
                    optionDiv.classList.add('selected');
                    radio.checked = true;
                    
                    this.answers[question.id] = index;
                });

                optionsContainer.appendChild(optionDiv);
            });
        }

        const progressBar = document.getElementById('progressBar');
        if (progressBar) {
            const progress = (questionNumber / 20) * 100;
            progressBar.style.width = `${progress}%`;
        }

        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const submitBtn = document.getElementById('submitBtn');

        if (prevBtn) prevBtn.disabled = questionNumber === 1;
        
        if (nextBtn) {
            nextBtn.style.display = questionNumber === 20 ? 'none' : 'block';
        }
        
        if (submitBtn) {
            submitBtn.style.display = questionNumber === 20 ? 'block' : 'none';
        }
    }

    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.displayQuestion();
        }
    }

    nextQuestion() {
        if (this.currentQuestionIndex < this.currentQuestions.length - 1) {
            this.currentQuestionIndex++;
            this.displayQuestion();
        }
    }

    submitQuiz() {
        if (this.timer) {
            clearInterval(this.timer);
        }

        const endTime = Date.now();
        const timeTaken = Math.floor((endTime - this.startTime) / 1000);

        let correct = 0;
        let wrong = 0;
        let unanswered = 0;

        this.currentQuestions.forEach(question => {
            if (this.answers.hasOwnProperty(question.id)) {
                if (this.answers[question.id] === question.correct) {
                    correct++;
                } else {
                    wrong++;
                }
            } else {
                unanswered++;
            }
        });

        const scorePercentage = Math.round((correct / 20) * 100);

        this.saveResult({
            name: this.studentName,
            score: scorePercentage,
            correct: correct,
            wrong: wrong,
            unanswered: unanswered,
            timeTaken: timeTaken,
            date: new Date().toLocaleDateString(),
            answers: { ...this.answers },
            questions: [...this.currentQuestions]
        });

        this.displayResults(scorePercentage, correct, wrong, unanswered, timeTaken);
    }

    displayResults(scorePercentage, correct, wrong, unanswered, timeTaken) {
        const elements = {
            studentNameDisplay: document.getElementById('studentNameDisplay'),
            scorePercentage: document.getElementById('scorePercentage'),
            correctCount: document.getElementById('correctCount'),
            wrongCount: document.getElementById('wrongCount'),
            unansweredCount: document.getElementById('unansweredCount'),
            timeTaken: document.getElementById('timeTaken')
        };

        if (elements.studentNameDisplay) elements.studentNameDisplay.textContent = this.studentName;
        if (elements.scorePercentage) elements.scorePercentage.textContent = `${scorePercentage}%`;
        if (elements.correctCount) elements.correctCount.textContent = correct;
        if (elements.wrongCount) elements.wrongCount.textContent = wrong;
        if (elements.unansweredCount) elements.unansweredCount.textContent = unanswered;

        if (elements.timeTaken) {
            const minutes = Math.floor(timeTaken / 60);
            const seconds = timeTaken % 60;
            elements.timeTaken.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        }

        this.showScreen('resultsScreen');
    }

    showReview() {
        const reviewContainer = document.getElementById('reviewQuestions');
        if (!reviewContainer) return;
        
        reviewContainer.innerHTML = '';

        let correct = 0, wrong = 0, unanswered = 0;
        
        this.currentQuestions.forEach((question) => {
            if (this.answers.hasOwnProperty(question.id)) {
                if (this.answers[question.id] === question.correct) {
                    correct++;
                } else {
                    wrong++;
                }
            } else {
                unanswered++;
            }
        });

        const summaryElements = {
            reviewCorrectCount: document.getElementById('reviewCorrectCount'),
            reviewWrongCount: document.getElementById('reviewWrongCount'),
            reviewUnansweredCount: document.getElementById('reviewUnansweredCount')
        };

        if (summaryElements.reviewCorrectCount) summaryElements.reviewCorrectCount.textContent = correct;
        if (summaryElements.reviewWrongCount) summaryElements.reviewWrongCount.textContent = wrong;
        if (summaryElements.reviewUnansweredCount) summaryElements.reviewUnansweredCount.textContent = unanswered;

        this.currentQuestions.forEach((question, index) => {
            const reviewDiv = document.createElement('div');
            reviewDiv.className = 'review-question';

            const userAnswer = this.answers[question.id];
            const isCorrect = userAnswer === question.correct;
            const isAnswered = userAnswer !== undefined;

            if (isAnswered) {
                reviewDiv.classList.add(isCorrect ? 'correct' : 'wrong');
            } else {
                reviewDiv.classList.add('unanswered');
            }

            reviewDiv.innerHTML = `
                <div class="review-question-header">
                    <span class="review-question-number">Question ${index + 1}</span>
                    <span class="review-status">
                        ${isAnswered ? (isCorrect ? '✅' : '❌') : '❓'}
                    </span>
                </div>
                <div class="review-question-text">${question.question}</div>
                <div class="review-options">
                    ${question.options.map((option, optIndex) => {
                        let className = 'review-option';
                        if (optIndex === question.correct) {
                            className += ' correct';
                        } else if (optIndex === userAnswer && !isCorrect) {
                            className += ' selected-wrong';
                        }
                        return `<div class="${className}">${String.fromCharCode(65 + optIndex)}. ${option}</div>`;
                    }).join('')}
                </div>
            `;

            reviewContainer.appendChild(reviewDiv);
        });

        this.showScreen('reviewScreen');
    }

    showResults() {
        this.showScreen('resultsScreen');
    }

    newQuiz() {
        const timerElement = document.getElementById('timer');
        if (timerElement) {
            timerElement.classList.remove('warning');
        }
        
        const nameInput = document.getElementById('studentName');
        if (nameInput) {
            nameInput.value = '';
        }
        
        this.showScreen('welcomeScreen');
    }

    saveResult(result) {
        try {
            let results = JSON.parse(localStorage.getItem('PhysicsQuizResults') || '[]');
            results.push(result);
            localStorage.setItem('PhysicsQuizResults', JSON.stringify(results));
        } catch (error) {
            console.error('Error saving result:', error);
        }
    }

    showAdminModal() {
    const modal = document.getElementById('adminModal');
    if (modal) modal.classList.add('active');
    }

    hideAdminModal() {
    const modal = document.getElementById('adminModal');
    const usernameInput = document.getElementById('adminUsername');
    const passwordInput = document.getElementById('adminPassword');
    if (modal) modal.classList.remove('active');
    if (usernameInput) usernameInput.value = '';
    if (passwordInput) passwordInput.value = '';
    }


    adminLogin() {
        const usernameInput = document.getElementById('adminUsername');
        const passwordInput = document.getElementById('adminPassword');
        
        if (!usernameInput || !passwordInput) return;
        
        const username = usernameInput.value;
        const password = passwordInput.value;

        if (username === 'sam' && password === '2525') {
            this.hideAdminModal();
            this.showAdminDashboard();
        } else {
            alert('Invalid credentials. Please try again.');
        }   

    }

    adminLogout() {
        this.showScreen('welcomeScreen');
    }

    showAdminDashboard() {
        try {
            const results = JSON.parse(localStorage.getItem('PhysicsQuizResults') || '[]');
            
            const elements = {
                totalStudents: document.getElementById('totalStudents'),
                averageScore: document.getElementById('averageScore'),
                completionRate: document.getElementById('completionRate'),
                studentTableBody: document.getElementById('studentTableBody')
            };

            if (elements.totalStudents) {
                elements.totalStudents.textContent = results.length;
            }
            
            if (elements.averageScore) {
                const averageScore = results.length > 0 
                    ? Math.round(results.reduce((sum, r) => sum + r.score, 0) / results.length)
                    : 0;
                elements.averageScore.textContent = `${averageScore}%`;
            }
            
            if (elements.completionRate) {
                const completionRate = results.length > 0 
                    ? Math.round((results.filter(r => r.correct + r.wrong + r.unanswered === 20).length / results.length) * 100)
                    : 0;
                elements.completionRate.textContent = `${completionRate}%`;
            }

            if (elements.studentTableBody) {
                elements.studentTableBody.innerHTML = '';

                results.slice(-20).reverse().forEach(result => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${result.name}</td>
                        <td>${result.score}%</td>
                        <td>${result.correct}</td>
                        <td>${result.wrong}</td>
                        <td>${result.unanswered}</td>
                        <td>${Math.floor(result.timeTaken / 60)}:${(result.timeTaken % 60).toString().padStart(2, '0')}</td>
                        <td>${result.date}</td>
                    `;
                    elements.studentTableBody.appendChild(row);
                });
            }

            this.showScreen('adminScreen');
        } catch (error) {
            console.error('Error loading admin dashboard:', error);
            alert('Error loading dashboard data.');
        }
    }

    exportCSV() {
        try {
            const results = JSON.parse(localStorage.getItem('PhysicsQuizResults') || '[]');
            
            if (results.length === 0) {
                alert('No data to export.');
                return;
            }

            const headers = ['Name', 'Score (%)', 'Correct', 'Wrong', 'Unanswered', 'Time Taken', 'Date'];
            const csvContent = [
                headers.join(','),
                ...results.map(result => [
                    `"${result.name}"`,
                    result.score,
                    result.correct,
                    result.wrong,
                    result.unanswered,
                    `"${Math.floor(result.timeTaken / 60)}:${(result.timeTaken % 60).toString().padStart(2, '0')}"`,
                    `"${result.date}"`
                ].join(','))
            ].join('\n');

            const blob = new Blob([csvContent], { type: 'text/csv' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `Physics_quiz_results_${new Date().toISOString().split('T')[0]}.csv`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error exporting CSV:', error);
            alert('Error exporting data.');
        }
    }

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        
        const targetScreen = document.getElementById(screenId);
        if (targetScreen) {
            targetScreen.classList.add('active');
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new PHYQuizApp();
});