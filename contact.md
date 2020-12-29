---
layout: simple
title: Contact
---

<style>
.hero-body .column {
	margin-bottom: 180px;
}

#email {
	text-align: center;
	font-size: 25px;
}
</style>

<script type="module">
// Forwards `subject` and `body` search params to the email link

const originalSearchParams = new URLSearchParams(location.search);
const element = document.querySelector('#email a');

const url = new URL(element.href);
if (originalSearchParams.has('subject')) {
	url.searchParams.set('subject', originalSearchParams.get('subject'));
}
if (originalSearchParams.has('body')) {
	url.searchParams.set('body', originalSearchParams.get('body'));
}

element.href = url.toString();
</script>

# Contact

---

<p id="email">
	<a href="mailto:jimmy@jameskajon.com">jimmy@jameskajon.com</a>
</p>

---
