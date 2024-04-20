<template>

    <div class="error-container">
      <p class="status-code">{{ error.statusCode }}</p>
      <p class="title">Oops!</p>
      <p class="message">{{ error.message }}</p>
      <button class="home-button" @click="handleClearError">Go home</button>
    </div>

</template>

<script setup>

    // Define the error prop passed when this page is called to display the error information 
    defineProps(['error']);

    // Custom button handler that clears the error and redirects you to the homepage
    const handleClearError = () => clearError({ redirect: '/' });

</script>

<style scoped>

    .error-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        text-align: center;
    }
    
    .status-code {
        font-size: 48px;
        font-weight: bold;
    }
    
    .title {
        font-size: 36px;
        margin: 20px 0;
    }
    
    .message {
        font-size: 18px;
        margin-bottom: 20px;
    }
    
    .home-button {
        padding: 10px 20px;
        font-size: 16px;
        background-color: #007bff;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }
    
    .home-button:hover {
        background-color: #0056b3;
    }
    
</style>