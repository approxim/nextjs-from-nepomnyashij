'use client'; // это обязательное условие на странице ошибки

export default function ErrorWrapper({error}: {error: Error}) {
  return <h1>Ooops!!! {error.message}</h1>;
}