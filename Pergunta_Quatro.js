/*
4) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada
 em uma sala diferente. Você não pode ver as lâmpadas da sala em que está,
  mas pode ligar e desligar os interruptores quantas vezes quiser.
   Seu objetivo é descobrir qual interruptor controla qual lâmpada.
Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas,
 qual interruptor controla cada lâmpada?
*/

// Resposta:

/*
1 - Ligue o primeiro interruptor e espere alguns minutos.
2 - Desligue o primeiro interruptor e ligue o segundo interruptor.
3 - vá até uma sala.
4 - Se a lampada nessa sala estiver acessa é controlada pelo interruptor 2.
    Se a lampada estiver apagada e fria é controlada pelo interruptor 3.
    Se a lampada estiver apagada e quente é controlada pelo interruptor 1.
5 - Sabendo qual interruptor controla a lampada 1, refazemos o passo de ligar outro interruptor 
    e esperar alguns minutos.
6 - desligamos esse interruptor e ligamos o outro e voltamos a sala.
7 - Se a lampada estiver acessa é controlada pelo interruptor 3.
    Se a lampada estiver apagada e quente é controlada pelo interruptor 2.
8 - Seguindo esses passos, conseguimos determinar exatamente qual interruptor controla 
    cada lampada, com apenas 2 idas a uma das salas.
*/

