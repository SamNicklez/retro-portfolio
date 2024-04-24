<template>
  <a2k-window id="music" draggable heading="Music" x="300" y="175">
    <div class="music-list">
      <h1>My Music</h1>
      <p>Double click to listen!</p>
      <div class="table-header">
        <div class="column">Name</div>
        <div class="column">Artist</div>
        <div class="column">Year</div>
        <div class="column">Length</div>
        <div class="column">Rating</div>
      </div>
      <div
        class="table-row"
        v-for="song in songs"
        :key="song.id"
        @click="selectRow(song.id)"
        @dblclick="openSongUrl(song.url)"
        :class="{ selected: selectedRow === song.id }"
      >
        <div class="column">{{ song.name }}</div>
        <div class="column">{{ song.artist }}</div>
        <div class="column">{{ song.year }}</div>
        <div class="column">{{ song.length }}</div>
        <div class="column">
          <span v-for="n in song.rating" :key="n" class="star">
            <img src="/public/goldstar.png" alt="star" />
          </span>
        </div>
      </div>
    </div>
  </a2k-window>
</template>

<script>
export default {
  data() {
    return {
      songs: [
        {
          id: 1,
          name: 'QUEST FOR FIRE',
          artist: 'Skrillex',
          year: 2023,
          length: '23:53',
          rating: 4,
          url: 'https://youtu.be/hb0XLX0b4Y4?si=SQPOOptCGWzMBW0f'
        },
        {
          id: 2,
          name: 'SUBJOHNICS',
          artist: 'Subtronics, John Summit',
          year: 2023,
          length: '22:41',
          rating: 3,
          url: 'https://youtu.be/kuJVbpaFuXs?si=L0viiaXito2scvMT'
        },
        {
          id: 3,
          name: 'Live from Joshua Tree',
          artist: 'RÜFÜS DU SOL',
          year: 2020,
          length: '45:44',
          rating: 5,
          url: 'https://youtu.be/Zy4KtD98S2c?si=oVW39Dv1lmU09EmD'
        }
      ],
      selectedRow: null
    }
  },
  methods: {
    selectRow(songId) {
      this.selectedRow = songId
    },
    openSongUrl(url) {
      window.open(url, '_blank')
    }
  }
}
</script>

<style scoped>
.music-list {
  max-height: 400px;
  overflow-y: auto;
  padding: 10px;
}

.table-header,
.table-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.column {
  flex: 1;
  padding: 5px 10px;
  text-align: left;
}

img {
  width: 20px !important;
  max-width: 20px !important;
  height: auto !important;
}

.table-header {
  background-color: #ccc;
  font-weight: bold;
}

.table-row {
  background-color: #eee;
  align-items: center;
}

.selected {
  background-color: #007bff;
  color: white;
}

.music-list::-webkit-scrollbar {
  width: var(--spacing-300) !important;
  height: var(--spacing-300) !important;
}

.music-list::-webkit-scrollbar-thumb {
  background: var(--color-gray-550) !important;
  border: var(--border-medium) !important;
}

.music-list::-webkit-scrollbar-track {
  background: url('patterns/scroll-track.svg') !important;
}
</style>
