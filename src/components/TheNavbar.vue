<template>
    <header>
        <md-toolbar class="md-accent">
            <h3 class="md-title app-name">Weight Tracker</h3>
            <nav>
                <router-link to="/statistics" class="md-button">Statistics <md-ink-ripple /></router-link>
                <router-link to="/history" class="md-button"><span>History</span> <md-ink-ripple /></router-link>
            </nav>
        </md-toolbar>
    </header>
</template>

<script>
export default {
  name: 'TheNavbar',
}
</script>

<style scoped>
.md-title.app-name {
    flex: 1;
}

</style>
