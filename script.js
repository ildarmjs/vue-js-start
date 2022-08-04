const App = {
  data() {
    return {
      counter: 0,
      title: 'Счетчик',
      toDoTitle: 'Мои заметки',
      placeholderStr: 'Введите название заметки',
      inputValue: '',
      notes: ['Заметка один'],
      colors: ['#ffffff']
    }
  },
  methods: {
    messageTest(event) {
      this.inputValue = event.target.value
    },
    addNewNote() {
      if(this.inputValue !== ''){
        this.notes.push(this.inputValue)
      }

    },
    remoteNote(){
      this.notes.splice(this.notes.indexOf())
      
    },
    remoteNoteFull(){
      this.notes.splice(this.notes)
    },
    toUpperCase(item){
      return item.toUpperCase()
    },
    randomColor(elem){
      if(this.inputValue !== ''){
        this.colors = elem.style.color = colors
      }
    }
  }
}
const app = Vue.createApp(App).mount('#app')
// app.mount('#app') - первый способ