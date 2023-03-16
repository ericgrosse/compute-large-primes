<script>
  import PrimeGenerator from '../utils/PrimeGenerator.js';

  let primes = [];

  function handleGenerateClick() {
    primes = PrimeGenerator.sieveOfEratosthenes();
  }
</script>

<main>
  <h1>Generate 10 Large Primes</h1>
  <button style="background-color: lightblue; border: none; padding: 10px 20px; border-radius: 5px; color: white;" on:click={handleGenerateClick}>Generate</button>

  <ul>
    {#each primes as prime}
      <li>{prime}</li>
    {/each}
  </ul>
</main>
