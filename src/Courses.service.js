import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, remove } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyArqKRq9A3zOc-usP1f2XtWncyAEbOKyHY",
  authDomain: "buff-course.firebaseapp.com",
  databaseURL: "https://buff-course-default-rtdb.firebaseio.com",
  projectId: "buff-course",
  storageBucket: "buff-course.appspot.com",
  messagingSenderId: "846974602967",
  appId: "1:846974602967:web:cc340a2576d3bf11156a92",
};

const coursesArray = [
  {
    id: 1,
    title: "React",
    description: "React is a JavaScript library for building user interfaces.",
    image: "https://source.unsplash.com/random/300x150/?web,frontend",
    instructor: "John Doe",
    rating: 4.5,
    department: "ATLS",
  },
  {
    id: 2,
    title: "Frontend",
    description:
      "React Native is a JavaScript library for building user interfaces.",
    image: "https://source.unsplash.com/random/300x150/?web,frontend",
    instructor: "John Doe",
    rating: 4.5,
    department: "ATLS",
  },
  {
    id: 3,
    title: "ATLS 5429 Swift",
    description:
      "React Native is a JavaScript library for building user interfaces.",
    image: "https://source.unsplash.com/random/300x150/?web,frontend",
    instructor: "John Doe",
    rating: 4.5,
    department: "ATLS",
  },
  {
    id: 4,
    title: "DS 5346 Statistics",
    description:
      "React Native is a JavaScript library for building user interfaces.",
    image: "https://source.unsplash.com/random/300x150/?web,frontend",
    instructor: "John Doe",
    rating: 4.5,
    department: "Data Science",
  },
  {
    id: 5,
    title: "DS 5120 Python Introduction",
    description:
      "React Native is a JavaScript library for building user interfaces.",
    image: "https://source.unsplash.com/random/300x150/?web,frontend",
    instructor: "John Doe",
    rating: 4.5,
    department: "Data Science",
  },
  {
    id: 6,
    title: "Machine Learning",
    description:
      "React Native is a JavaScript library for building user interfaces.",
    image: "https://source.unsplash.com/random/300x150/?web,frontend",
    instructor: "John Doe",
    rating: 4.5,
  },
  {
    id: 7,
    title: "p5.js",
    description:
      "React Native is a JavaScript library for building user interfaces.",
    image: "https://source.unsplash.com/random/300x150/?web,frontend",
    instructor: "John Doe",
    rating: 4.5,
  },
];
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase();
let dataref = ref(db);
function writeAccounts(accounts = []) {
  const db = getDatabase(app);
  const accountsRef = ref(db, "accounts");
  return set(accountsRef, accounts);
}
function readAccounts(accounts = []) {
  const db = getDatabase(app);
  const accountsRef = ref(db, "accounts");
  return get(accountsRef);
}
function removeAccount(accountId) {
  const db = getDatabase(app);
  const accountsRef = ref(db, "accounts/" + accountId.toString());
  return remove(accountsRef);
}
function addAccount(accounts) {
  const db = getDatabase(app);
  const accountsRef = ref(db, "accounts");
  return set(accountsRef, accounts);
}
function updateAccount(accountId, account) {
  const db = getDatabase(app);
  const accountsRef = ref(db, "accounts/" + accountId.toString());
  return set(accountsRef, account);
}
