const imcTable = document.querySelector("#table");

export function createTable(table) {
	table.forEach((item) => {
		const div = document.createElement("div");
		div.classList.add("table-data");

		const classification = document.createElement("p");
		classification.innerText = item.classification;
		div.appendChild(classification);

		const info = document.createElement("p");
		info.innerText = item.info;
		div.appendChild(info);

		const obesity = document.createElement("p");
		obesity.innerText = item.obesity;
		div.appendChild(obesity);

		imcTable.appendChild(div);
	});
    return createTable
}
