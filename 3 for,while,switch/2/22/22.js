/*
Дано натуральное число (пусть запись этого числа в десятичной системе имеет вид akak-1…a0 ). Найти:
а) знакочередующуюся сумму цифр этого числа a0 — a1 +… + (-1)kak;
б) знакочередующуюся сумму цифр этого числа ak — ak—1 +… + (-1)ka0;
Примечание. В обеих задачах условный оператор и операцию возведения в степень не использовать.

Natural son berilgan (bu sonning oʻnlik sanoq sistemasidagi yozuvi akak-1...a0 ga oʻxshab koʻrinsin). Toping:
a) bu son raqamlarining o'zgaruvchan yig'indisi a0 - a1 + ... + (-1)kak;
b) bu ​​son raqamlarining o'zgaruvchan yig'indisi ak - ak - 1 + ... + (-1) ka0;
Eslatma. Ikkala masalada ham shartli operator va daraja ko‘rsatish amalidan foydalanmaslik kerak.

Console.WriteLine("W5.25. Дано натуральное число. Определить номер цифры 3 в нем, считая от конца числа. Если такой цифры нет, ответом должно быть число 0, если таких цифр в числе несколько — должен быть определен номер самой правой из них.");
            int N25 = (int)Input("натуральное число", int.MinValue, int.MaxValue);
            int N25n3 = 0;
            int N25count = 1;
            while (N25>0)
            {
                if (N25 % 10 == 3 && N25n3 == 0) N25n3 = N25count;
                N25count++;
                N25 /= 10;
            }
            Console.WriteLine(N25n3);
            Console.ReadKey();
            Console.Clear();
*/