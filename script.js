function openTab(tabName) {
	var tabContent = document.getElementsByClassName('tab');
	for (var i = 0; i < tabContent.length; i++) {
		tabContent[i].style.display = "none";
	}

	document.getElementById(tabName).style.display = "block";	
}

class AplikasiPendaftar {
	constructor() {
		this.pendaftarData = []
	}

	init() {
		this.setupFormSubmit();	
	}

	validateForm(event) {
		event.preventDefault()

		var nama = document.getElementById("nama").value;
		var umur = parseInt(document.getElementById("umur").value);
		var uangSangu = parseInt(document.getElementById("uangSangu").value);

		this.pendaftarData.push({nama, umur, uangSangu});

		var table = document.getElementById("pendaftarTable").getElementsByTagName('tbody')[0];
		var newRow = table.insertRow(table.rows.length);
		var cell1 = newRow.insertCell(0);
		var cell2 = newRow.insertCell(1);
		var cell3 = newRow.insertCell(2);
		cell1.innerHTML = nama;
		cell2.innerHTML = umur;
		cell3.innerHTML = uangSangu;

		var totalUmur = 0;
		var totalUangSangu = 0;
		for (var i = 0; i <this.pendaftarData.length; i++) {
			totalUmur += this.pendaftarData[i].umur;
			totalUangSangu += this.pendaftarData[i].uangSangu;
		}

		var avgUmur = totalUmur / this.pendaftarData.length;
		var avgUangSangu = totalUangSangu / this.pendaftarData.length;

		document.getElementById("avgUmur").innerText = avgUmur.toFixed(0);
		document.getElementById("avgUangSangu").innerText = avgUangSangu.toFixed(0);

		document.getElementById("registrationForm").reset();
	}

	setupFormSubmit() {
		const registrationForm = document.getElementById("registrationForm");
		registrationForm.addEventListener('submit', (event) => this.validateForm(event));
		registrationForm.res
	}
}

const aplikasiPendaftar = new AplikasiPendaftar();

aplikasiPendaftar.init();
