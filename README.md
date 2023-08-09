# Todo App Mock Up Test

## With Vite + React

###### **Jawaban** :

**1. Apakah Kegunaan JSON pada REST API?**

- **Kegunaan JSON (Javascript Object Notation) pada REST API adalah untuk memudahkan pertukaran data, karena JSON sendiri adalah sebuah format standar yang menggunakan tulisan yang dapat dibaca oleh manusia untuk pertukaran data, yang di dalamnya berisi pasangan antara key dan value.**

**2. Jelaskan bagaimana REST API bekerja**

- **API (Aplication Programming Interface) sendiri adalah suatu cara yang memungkinkan dua komputer berkomunikasi.**
- **Sedangkan REST (Representational State Transfer) adalah salah satu cara implementasi dari API. Dengan itu API memungkinkan komunikasi antar platform melalui siklus request - respons. Aplikasi yang membutuhkan data dari layanan atau server lain (client) mengirimkan permintaan, yang disampaikan melalui protokol API, dan data yang diperlukan dikirim kembali dari server.**
- **Client dapat berkomunikasi dengan server, memanipulasi data, mengambil data yang ada di server tersebut tanpa merusak atau merubah data asli di dalam server. Hal ini dimungkinkan karena adanya protocol yang mengatur, sehinga API tidak akan merubah apapun di luar aturan yang berlaku**

#### Link Repository :

- **Front End**

```
https://github.com/ftaufik/todo-app-client
```

- **Back End**

```
https://github.com/ftaufik/todo-app-server
```

#### Link Live Website :

```
https://quiet-pavlova-042b78.netlify.app/
```

**Feature Description**

- **User bisa login menggunakan data sebagai berikut :**

```
[
    {
        "password": "1234"
    },
    {
        "password": "4444"
    },
]
```

- **User bisa melakukan CRUD pada Todo list yang ada**
