<template>
    <header>
        <md-toolbar class="md-accent">
            <h3 class="md-title app-name">Weight Tracker</h3>
            <nav>
                <md-button>Statistics</md-button>
                <md-button>History</md-button>
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
