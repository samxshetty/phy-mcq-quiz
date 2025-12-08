class PHYQuizApp {
    constructor() {
        this.questions = [
 {
    id: 1,
    question: "An experimental evidence for matter waves is",
    options: ["photoelectric effect", "compton effect", "electron diffraction", "interference of light"],
    correct: 2
  },
  {
    id: 2,
    question: "A wave packet is used to represent",
    options: ["A light wave", "a stationary wave", "Matter wave", "a transverse wave"],
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
    question: "de Broglie wave length of a body of mass m and kinetic energy E is given by:",
    options: ["λ = / h", "λ = h / meV", "λ = h / √(2mE)", "λ = h/2meV"],
    correct: 2
  },
  {
    id: 10,
    question: "If the energy of a particle is reduced to one-fourth then the percentage increase in the de-broglie wavelength is",
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
    question: "According to Max Born's interpretation, represents",
    options: ["energy density", "particle density", "probability density", "charge density"],
    correct: 2
  },
  {
    id: 36,
    question: "In a one dimensional infinite potential well, energy of the particle En =",
    options: ["n²h²/8mL²", "n²ħ²/8mL²", "n²h²/2mL²", "n²h²/4mL²"],
    correct: 0
  },
  {
    id: 37,
    question: "The energy corresponding to the lowest permitted energy level for a particle in an infinite potential well is called",
    options: ["Excited energy", "Zero point energy", "Metastable state energy", "None of these"],
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

  // Unit 2: Quantum Computing
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
    question: "It is the process of replacing iᵗʰ row of the matrix by iᵗʰ column, then it is said to be",
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
  {
    id: 85,
    question: "Pauli's matrices are",
    options: ["Unitary", "Reversible", "Both unitary and reversible", "None of the above"],
    correct: 2
  },
  {
    id: 86,
    question: "If <0|0>=1 is called",
    options: ["Normalized", "Orthogonal", "Hermitian", "Orthonormal"],
    correct: 1
  },
  {
    id: 87,
    question: "|0> and |1> are orthogonal if:",
    options: ["They are perpendicular", "They are parallel", "Angle between them is 0", "Linearly independent"],
    correct: 0
  },
  {
    id: 88,
    question: "In a linear vector space, linearly dependent and linearly independent vectors are",
    options: ["If all the scalars are equal to 0 and some scalars are not equal to 0.", "If some scalars are not equal to 0 and all the scalars are equal to 0.", "Both the case scalars are equal to 0", "Both the case scalars are not equal to 0."],
    correct: 1
  },
  {
    id: 89,
    question: "Advantage of qubit over bit is,",
    options: ["It works in spin up state", "It works in spin down state", "It also works in super posed state", "All the above"],
    correct: 2
  },
  {
    id: 90,
    question: "Quantum gates are unitary in nature. Because of,",
    options: ["Superposed state", "Spin up state", "Spin down state", "Normalization condition."],
    correct: 3
  },
  {
    id: 91,
    question: "Which quantum gate work as flip flop gate?",
    options: ["Z gate", "Y gate", "X gate", "None of the above."],
    correct: 2
  },
  {
    id: 92,
    question: "Which quantum gate can take the qubit to super posed state?",
    options: ["X gate", "Y gate", "Z gate", "Hadamard gate"],
    correct: 3
  },
  {
    id: 93,
    question: "In |Ψ>= α|0>+ β|1>, α, β represents,",
    options: ["Ground state and excited state", "Probability density", "Probability amplitude", "All the above"],
    correct: 2
  },
  {
    id: 94,
    question: "In |Ψ>= α|0>+ β|1>, if α=1 then,",
    options: ["Probability of finding the electron in the ground state is high", "Probability of finding the electron in the excited state is high", "Probability of finding the electron in the superposed state is high", "None of the above"],
    correct: 0
  },
  {
    id: 95,
    question: "In |Ψ>= α|0>+ β|1>, if β =1 then,",
    options: ["Probability of finding the electron in the ground state is high", "Probability of finding the electron in the excited state is high", "Probability of finding the electron in the superposed state is high", "None of the above"],
    correct: 1
  },
  {
    id: 96,
    question: "In |Ψ>= α|0>+ β|1>, if α and β = 1/√2 then,",
    options: ["Probability of finding the electron in the ground state is high", "Probability of finding the electron in the excited state is high", "Probability of finding the electron in the superposed state is high", "None of the above"],
    correct: 2
  },

  // Unit 3: Lasers & Optical Fibers
  {
    id: 97,
    question: "Important characteristic of laser beam is",
    options: ["Interference", "Diffraction", "Dispersion", "Coherence"],
    correct: 3
  },
  {
    id: 98,
    question: "Emission of a photon by an excited atom due to interaction with a passing photon nearby is called",
    options: ["Spontaneous emission", "Induced absorption", "Stimulated emission", "Thermionic emission"],
    correct: 2
  },
  {
    id: 99,
    question: "Metastable states are",
    options: ["Ground state energy states.", "Excited state energy levels in which electrons stay for very short interval of time.", "Excited state energy levels in which electron can stay for unusually long time.", "Nuclear energy states."],
    correct: 2
  },
  {
    id: 100,
    question: "The required condition to achieve laser action in a system is",
    options: ["State of population inversion", "Excitation source", "A resonant cavity", "All the three"],
    correct: 3
  },
  {
    id: 101,
    question: "What is the need to achieve population inversion?",
    options: ["To excite most of the atoms", "To bring most of the atoms to ground state", "To achieve stable condition", "To reduce the time of production of laser"],
    correct: 0
  },
  {
    id: 102,
    question: "In a laser, the mirrors are there on either side of the device",
    options: ["In order to filter the heat & leave out only the light.", "To protect the eyes of the observer.", "To save energy of the excitation source.", "So that same photons continue to cause further batches of stimulated transitions."],
    correct: 3
  },
  {
    id: 103,
    question: "Nd:YAG laser is a",
    options: ["Two level laser", "Three level laser", "Four level laser", "Five level laser"],
    correct: 2
  },
  {
    id: 104,
    question: "In He-Ne laser, the ratio of He to Ne gas molecules is of the order",
    options: ["1:10", "1:1", "10:1", "100:1"],
    correct: 2
  },
  {
    id: 105,
    question: "The pumping sourse in Nd:YAG laser is",
    options: ["Chemical", "Optical", "Electrical", "Mechanical"],
    correct: 1
  },
  {
    id: 106,
    question: "Which color of light has the shortest wavelength ?",
    options: ["Yellow", "Blue", "Red", "Green"],
    correct: 1
  },
  {
    id: 107,
    question: "Laser action is found in _________ semiconductor.",
    options: ["direct band gap", "indirect band gap", "germanium", "silicon"],
    correct: 0
  },
  {
    id: 108,
    question: "The light from a laser source is monochromatic because all the photons",
    options: ["are in phase", "have same energy", "have same amplitude", "are in the same direction"],
    correct: 1
  },
  {
    id: 109,
    question: "Which one of the following statements best describes stimulated emission in a laser?",
    options: ["Electrons collide with atoms in a metastable state and cause photons to be emitted.", "Atoms in a metastable state de-excite and cause electrons to be emitted.", "Photons interact with atoms in a metastable state and cause photons to be emitted.", "Photons interact with atoms in a metastable state and cause electrons to be emitted."],
    correct: 2
  },
  {
    id: 110,
    question: "Which of the following is an example of optical pumping?",
    options: ["Nd:YAG", "Helium-Neon laser", "Semiconductor laser", "Dye laser"],
    correct: 0
  },
  {
    id: 111,
    question: "Why is laser light monochromatic?",
    options: ["The excited electrons are in a metastable state.", "The system is in a state of population inversion.", "The emitted photon and incident photon are of the same phase.", "Photons of the same energy as that of the incident photons are emitted when the electrons transit down from a higher energy level."],
    correct: 3
  },
  {
    id: 112,
    question: "Which of the following statements concerning a laser system is incorrect?",
    options: ["Spontaneous emission occurs in the laser system.", "The intensity of the laser beam can be varied by changing the reflective coefficient of the partially reflecting mirror.", "The laser system does not require an external energy source.", "The laser medium consists of a metastable state."],
    correct: 2
  },
  {
    id: 113,
    question: "The active medium in Nd:YAG laser is",
    options: ["Neodymium", "YAG crystal", "Yttrium", "Aluminium"],
    correct: 0
  },
  {
    id: 114,
    question: "The number of atoms in the excited state becomes much greater than the number of atoms in the ground state. This is known as",
    options: ["normal population", "population inversion", "stimulated emission", "spontaneous emission"],
    correct: 1
  },
  {
    id: 115,
    question: "Laser light is intense because",
    options: ["it has very less number of Photons that in phase", "it has very less number of Photons that are not in phase", "it has very large number of Photons that are in phase", "it has very large number of Photons that are not in phase"],
    correct: 2
  },
  {
    id: 116,
    question: "The emission of photon without being aided by any external agency is called",
    options: ["light amplification", "induced absorption", "stimulated emission", "spontaneous emission"],
    correct: 3
  },
  {
    id: 117,
    question: "The lifetime of an atom at the ordinary excited state is of the order of",
    options: ["few millisecond", "few nanosecond", "few microsecond", "unlimited"],
    correct: 1
  },
  {
    id: 118,
    question: "The lifetime of an atom in a metastable state is of the order of",
    options: ["a few second", "Unlimited", "A nanosecond", "Few millisecond"],
    correct: 3
  },
  {
    id: 119,
    question: "Supply of energy to atoms for excitation is called",
    options: ["Glowing", "Bombarding", "Incidenting", "Pumping"],
    correct: 3
  },
  {
    id: 120,
    question: "In a semiconductor laser there are no mirrors used because",
    options: ["the laser light required is of low power", "mere driving a minimum current in the diode is enough for laser action", "p-section acts as one mirror and n-section acts as the other mirror", "a pair of parallel planes cleaved or polished at a particular angle in the crystal reflect the light efficiently"],
    correct: 3
  },
  {
    id: 121,
    question: "A semiconductor laser has a peak emission radiation of wavelength 1.24 μm. What is its band gap value in eV?",
    options: ["1.4 eV", "1.6 eV", "1 eV", "1.8 eV"],
    correct: 2
  },
  {
    id: 122,
    question: "A He-Ne laser emits light at a wavelength of 632.8 nm and has an output power of 5 mW. The number of photons emitted in each second by this laser are",
    options: ["1.79 x 10¹⁸ Photons/sec", "1.59 x 10¹⁶ Photons/sec", "0.6 x 10¹⁶ photons/sec", "1.59 x 10¹⁸ photons/sec"],
    correct: 1
  },
  {
    id: 123,
    question: "If the wavelength of light emitted by spontaneous emission is 696 nm at 300K, the ratio of population of two energy levels is",
    options: ["1.059 x 10⁻³²", "1.059 x 10⁻³³", "0.059 x 10⁻³⁰", "1.059 x 10⁻³⁰"],
    correct: 3
  },
  {
    id: 124,
    question: "If a pulsed laser emits photons of wavelength 780 nm with 20 mW average power/pulse, the number of photons contained in each pulse if the pulse duration is 10 ns is",
    options: ["7.86 x 10⁸", "5.08 x 10⁸", "3.86 x 10⁸", "1.86 x 10⁸"],
    correct: 0
  },
  {
    id: 125,
    question: "The wavelength of radiation emitted by a semiconducting laser with band gap energy 2.8eV.",
    options: ["2.8 Å", "4.3308 Å", "5548.4 Å", "4430.8 Å"],
    correct: 3
  },
  {
    id: 126,
    question: "Numerical aperture of an optical fiber depends on",
    options: ["Diameter of the fiber", "Acceptance angle", "Critical angle", "Refractive index of core"],
    correct: 1
  },
  {
    id: 127,
    question: "Optical fiber works on the phenomenon of _______",
    options: ["total internal reflection", "polarization", "diffraction", "refraction"],
    correct: 0
  },
  {
    id: 128,
    question: "What is the other name for a maximum external incident angle?",
    options: ["Optical angle", "Total internal reflection angle", "Refraction angle", "Wave guide acceptance angle"],
    correct: 3
  },
  {
    id: 129,
    question: "How does the refractive index vary in Graded Index fibre?",
    options: ["Tangentially", "Radially", "Longitudinally", "Transversely"],
    correct: 1
  },
  {
    id: 130,
    question: "Which of the following has more distortion?",
    options: ["Single step-index fibre", "Graded index fibre", "Multimode step-index fibre", "Glass fibre"],
    correct: 2
  },
  {
    id: 131,
    question: "What causes microscopic bend?",
    options: ["Uniform pressure", "Non-uniform volume", "Uniform volume", "Non-uniform pressure"],
    correct: 3
  },
  {
    id: 132,
    question: "The loss in signal power as light travels down a fiber is called",
    options: ["Dispersion", "Scattering", "Absorption", "Attenuation"],
    correct: 3
  },
  {
    id: 133,
    question: "The inner portion of the optical fiber cable is called",
    options: ["Cladding", "Coating", "Inner conductor", "Core"],
    correct: 3
  },
  {
    id: 134,
    question: "When more than one mode is propagating, how is it dispersed?",
    options: ["Dispersion", "Inter-modal dispersion", "Material dispersion", "Waveguide dispersion"],
    correct: 1
  },
  {
    id: 135,
    question: "The core of an optical fiber has a",
    options: ["Lower refracted index than air", "Lower refractive index than the cladding", "Higher refractive index than the cladding", "Similar refractive index with the cladding"],
    correct: 2
  },
  {
    id: 136,
    question: "Having cladding around the core is preferred to coating the core with a reflecting material(silvering) because",
    options: ["Silvering is not economical", "Coating may get affected by abrasions", "Coated material may undergo chemical changes in the field conditions and thus become dull", "The total internal reflection at the core-cladding interface is superior to the one by any coated material"],
    correct: 3
  },
  {
    id: 137,
    question: "Attenuation means",
    options: ["Amplification of signal strength", "Division of signal strength", "Loss of signal strength", "Tuning of signal"],
    correct: 2
  },
  {
    id: 138,
    question: "In an optical fiber the signal loss due to scattering is mainly due to",
    options: ["Rayleigh scattering", "Raman scattering", "Wein's scattering", "All the answers"],
    correct: 0
  },
  {
    id: 139,
    question: "In an optical fiber, Rayleigh scattering occurs when a photon",
    options: ["Encounters an impurity atom in its path", "Hits the cladding", "Encounters sharp changes in refractive index over distances smaller than its wavelength", "Encounters a microscopic bend"],
    correct: 2
  },
  {
    id: 140,
    question: "Signal distortion occurs due to",
    options: ["Irregularities in fiber structure", "Variation in refractive index of the core at different points", "Spreading of pulse", "Macroscopic bend"],
    correct: 2
  },
  {
    id: 141,
    question: "The numerical aperture of an optical fiber in air is 0.32. The numerical aperture of an optical fiber in water of R.I. 1.33 is",
    options: ["0.43", "0.24", "0.64", "0.96"],
    correct: 1
  },
  {
    id: 142,
    question: "The numerical aperture of a fiber if the angle of acceptance is 15 degrees, is",
    options: ["0.17", "0.26", "0.50", "0.75"],
    correct: 1
  },
  {
    id: 143,
    question: "Fractional index change for an optical fiber with core and cladding of refractive indices 1.563 and 1.498 respectively is",
    options: ["0.00415", "0.04159", "0.04300", "0.00400"],
    correct: 1
  },
  {
    id: 144,
    question: "The angle of acceptance of an optical fiber with numerical aperture of 0.446 is",
    options: ["26.49°", "7.78°", "20.5°", "30.6°"],
    correct: 0
  },
  {
    id: 145,
    question: "An optical signal loses 15% of its power after traversing a fiber length of 400 m. The fiber loss is",
    options: ["0.0176", "1.7645", "17.645", "0.1764"],
    correct: 1
  },
  {
    id: 146,
    question: "The attenuation in an optical fiber of length 500 m, when a light signal of power 100 mW emerges out of the fiber with a power of 90 mW is",
    options: ["0.0915 dB/km", "0.00915dB/km", "9.15 dB/km", "0.915 dB/km"],
    correct: 3
  },
  {
    id: 147,
    question: "Optical fibers are used in",
    options: ["CAT scans", "X-ray photos", "Ultrasound scans", "Endoscopy"],
    correct: 3
  },
  {
    id: 148,
    question: "Which fiber is preferred for long distance communication?",
    options: ["Step index single mode fiber", "Graded index multimode fiber", "Step index multimode fiber", "Graded index fiber"],
    correct: 0
  },
  {
    id: 149,
    question: "In the structure of the fiber optic cable, the refractive index of the core is always ____ the refractive index of the cladding",
    options: ["Less than", "Equal to", "Greater than", "None of these"],
    correct: 2
  },
  {
    id: 150,
    question: "The numerical aperture (NA) in optical fiber is used to describe",
    options: ["Light spreading ability", "Light gathering or light-collecting ability", "Light output from an external shield", "Light leakage ability"],
    correct: 1
  },
  {
    id: 151,
    question: "The refractive index of the core is uniform throughout and undergoes an abrupt change at the cladding boundary which is known as______",
    options: ["Uniform-index fiber", "Scale-index fiber", "Graded-index fiber", "Step index fiber"],
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