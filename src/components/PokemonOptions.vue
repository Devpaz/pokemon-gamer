<template>
    <div class="options-container">
        <ul>
            <li>El chavo</li>
            <li>El tux</li>
            <li>El cap</li>
            <li>El musu</li>
            <li>El Xomi</li>
        </ul>
    </div>
    
</template>

<script>
export default {

}
</script>

<style>
ul {
    list-style-type: none;
}
li {
    background-color: white;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    margin-bottom: 10px;
    width: 250px;
}

li:hover {
    background-color: rgba(0, 0, 0, 0.05);
}

.options-container {
    display: flex;
    justify-content: center;
}


</style>