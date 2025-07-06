export default function GenerateId(salter: number = 7) {
    const time = new Date();

    const day = String(time.getDate()).padStart(2, "0");
    const month = String(time.getMonth() + 1).padStart(2, "0");
    const year = String(time.getFullYear());
    const hours = String(time.getHours()).padStart(2, "0");
    const minutes = String(time.getMinutes()).padStart(2, "0");

    const timestamp = `${day}${month}${year}${hours}${minutes}`;

    const rdID = Math.floor(Math.random() * (parseInt(timestamp) + salter));

    const id = `SM-${rdID}`;

    return id;
}