<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { onMounted, ref } from 'vue'
import { useSearchStore } from '@/stores/search'

const modal = ref(null)
const btn = ref(null)
const span = ref(null)
const searchTerm = ref('')
const useSearch = new useSearchStore()

onMounted(() => {
  modal.value = document.getElementById('myModal')
  btn.value = document.getElementById('myBtn')
  span.value = document.getElementsByClassName('close')[0]

  btn.value.onclick = () => {
    modal.value.style.display = 'block'
  }

  span.value.onclick = () => {
    modal.value.style.display = 'none'
  }

  window.onclick = (event) => {
    if (event.target == modal.value) {
      modal.value.style.display = 'none'
    }
  }
})

onMounted(async () => {
//   await useSearch.SearchMulti()
})
</script>
<template>
  <i id="myBtn" class="bi bi-search colorSearch marginS search-bi"></i>

  <div id="myModal" class="modal">
    <div class="modal-content">
      <div class="modal-header">
        <span class="close">&times;</span>
      </div>
      <div class="modal-body">
        <div class="wrap">
          <div class="search">
            <input v-model="searchTerm" type="text" class="searchTerm" placeholder="..." />
            <button type="submit" class="searchButton" @click="useSearch.SearchMulti(searchTerm)">
              <i class="fa fa-search"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="modal-footer"></div>
    </div>
  </div>
</template>

<style scoped>
.modal {
  display: none;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}

.colorSearch {
  color: rgb(255, 255, 255);
  margin-right: 10px;
}

.search {
  width: 100%;
  position: relative;
  display: flex;
}

.searchTerm {
  width: 100%;
  border: 3px solid #000000;
  border-right: none;
  padding: 5px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #9dbfaf;
}

.searchTerm:focus {
  color: #000000;
}

.searchButton {
  width: 40px;
  height: 36px;
  border: 1px solid #000000;
  background: #000000;
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;
}

.wrap {
  width: 30%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.search-bi {
  font-size: 20px;
  cursor: pointer;
}

.modal-content {
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  width: 80%;
  box-shadow:
    0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s;
}

.marginS {
  margin-left: 4px;
}

/* Add Animation */
@-webkit-keyframes animatetop {
  from {
    top: -300px;
    opacity: 0;
  }

  to {
    top: 0;
    opacity: 1;
  }
}

@keyframes animatetop {
  from {
    top: -300px;
    opacity: 0;
  }

  to {
    top: 0;
    opacity: 1;
  }
}

.close {
  color: rgb(0, 0, 0);
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

.modal-header {
  padding: 2px 16px;
  background-color: #ffffff;
  color: rgb(0, 0, 0);
}

.modal-body {
  padding: 50px;
}

.modal-footer {
  padding: 2px 16px;
  background-color: #ffffff;
  color: rgb(0, 0, 0);
}
</style>
