const PrimeGenerator = {
  // Verify whether an inputted number `num` is prime using  the Sieve of Eratosthenes algorithm
  isPrime: function(num) {
      // Check for edge cases
      if (num < 2) return false;
      if (num === 2 || num === 3) return true;
      if (num % 2 === 0 || num % 3 === 0) return false;
      if (num < 25) return true;

      // Use optimized Sieve of Eratosthenes algorithm to check primality
      let limit = Math.ceil(Math.sqrt(num));
      let sieve = [];
      for (let i = 5; i <= limit; i += 6) {
        if (!sieve[i]) {
          let step = i === 5 ? 2 : 4;
          for (let j = i * i; j <= limit; j += step * i) {
            sieve[j] = true;
          }
        }
        if (!sieve[i + 2]) {
          let step = i === 5 ? 2 : 4;
          for (let j = (i + 2) * (i + 2); j <= limit; j += step * (i + 2)) {
            sieve[j] = true;
          }
        }
      }
      for (let i = 5; i <= limit; i += 6) {
        if (!sieve[i] && num % i === 0) return false;
        if (!sieve[i + 2] && num % (i + 2) === 0) return false;
      }
      return true;
    },

  // Sieve of Eratosthenes
  sieveOfEratosthenes: function() {
    const n = 100000; // limit for generating primes
    const primes = [];
    const sieve = new Array(n + 1).fill(true);

    // mark multiples of primes as composite
    for (let i = 2; i <= n; i++) {
      if (sieve[i]) {
        primes.push(i);
        for (let j = i * i; j <= n; j += i) {
          sieve[j] = false;
        }
      }
    }

    // filter out primes with fewer than 5 digits
    return primes.filter(p => p.toString().length >= 5).slice(0, 10);
  },

  // Fermat's Little Theorem
  fermatPrimalityTest: function() {
    const primes = [];
    let i = 1;

    while (primes.length < 10) {
      const p = 100000 + 10000 * i; // start at 6 digits and increment by 1
      let isPrime = true;

      // test if p is prime using Fermat's Little Theorem
      for (let a = 2; a < p; a++) {
        if (Math.pow(a, p - 1) % p !== 1) {
          isPrime = false;
          break;
        }
      }

      if (isPrime) {
        primes.push(p);
      }

      i++;
    }

    return primes;
  },

  // Miller-Rabin Primality Test
  millerRabin: function() {
    const primes = [];
    let n = 100000; // start at 6 digits

    while (primes.length < 10) {
      let isPrime = true;

      // use Miller-Rabin primality test to determine if n is prime
      for (let i = 0; i < 10; i++) {
        const a = Math.floor(Math.random() * (n - 3)) + 2; // generate random base
        const s = n - 1;
        let d = s;
        while (d % 2 === 0) {
          d /= 2;
          const x = Math.pow(a, d) % n;
          if (x === 1 || x === s) break;
          if (i === 9) {
            isPrime = false;
            break;
          }
          d = s;
        }
      }

      if (isPrime) {
        primes.push(n);
      }

      n++;
    }

    return primes;
  },
};

export default PrimeGenerator;
