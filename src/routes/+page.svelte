<script>
  import PrimeGenerator from '../utils/PrimeGenerator.js';

  let generatedPrimes = [];
  let loading = false;
  let digits = 8;

  async function handleGenerateClick() {
    loading = true;
    generatedPrimes = await PrimeGenerator.sieveOfEratosthenes(digits); // doesn't work, 6 digit or higher primes time out without a loader
    loading = false;
  }

  function handleDigitsChange(event) {
    digits = parseInt(event.target.value);
  }
</script>

<main>
  <h1>Generate Large Primes</h1>

  <form on:submit|preventDefault={handleGenerateClick}>
    <label for="digits">Minimum number of digits:</label>
    <input type="number" id="digits" name="digits" min="1" max="10" bind:value={digits} on:change={handleDigitsChange}>
    <button class:loading={loading}>
      {#if loading}
        <span class="loader"></span>
      {:else}
        Generate
      {/if}
    </button>
  </form>

  <ul>
    {#each generatedPrimes as prime}
      <li>{prime}</li>
    {/each}
  </ul>
</main>

<style>
  button {
    background-color: lightblue;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    color: white;
    font-size: 16px;
    cursor: pointer;
    position: relative;
  }

  button.loading::before {
    content: "";
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 2px solid rgba(0, 0, 0, 0.2);
    border-top-color: rgba(0, 0, 0, 0.6);
    border-radius: 50%;
    animation: spin 1s ease-in-out infinite;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  form {
    margin-bottom: 20px;
  }

  label {
    font-size: 18px;
    font-weight: bold;
    margin-right: 10px;
  }

  input {
    font-size: 16px;
    padding: 5px;
    border-radius: 5px;
    border: 2px solid #ccc;
  }
</style>
