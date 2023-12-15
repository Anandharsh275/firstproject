%code to check linearity
clc
close all
clear all
x1(t)=t;
x2(t)=power(t+2);
a=5;
b=2;
y1(t)=2[a*x1(t)+b*x2(t)];
y2(t)=a[2*x1(t)]+b[2*x2(t)];
plot(x1(t),y1(t));

