        async function getGoldPrice() {
          try {
            const res = await fetch('https://api.example.com/gold/today');
            const data = await res.json();
            document.getElementById('gold-price').innerText = data.price + ' تومان';
          } catch {
            document.getElementById('gold-price').innerText = 'خطا در بارگذاری';
          }
        }
        function scrollToSection(id) {
          document.getElementById(id).scrollIntoView({ behavior:'smooth' });
        }
        window.addEventListener('load', getGoldPrice);
