---
layout: topic
title: Wide neural networks and neural tangent kernels
---

A solid theoretical understanding of deep neural networks is lacking at the
moment. This is because, although the building blocks of neural networks are
simple, their collective behavior is very complex. Mathematically, this
complexity is captured by a non-linear, time-evolving object called the neural
tangent kernel, which enters into the training dynamics.

The number of neurons in each layer of the neural network is called the "width"
of that layer. When considering the limit in which the width of all hidden
layers goes to infinity, the neural network simplifies dramatically. By an
argument using the central limit theorem, one can show that in the infinite
width limit, the neurons follow a collective Gaussian distribution known as
a Gaussian process. Intuitively, the fluctuations from all the neurons cancel
out. This effect was known for a long time for simple cases and characterizes
the neural network at initialization, i.e. before training has begun.
Furthermore, the neural tangent kernel becomes independent of the specific
initialization chosen and can be computed using recursive layer-by-layer
expressions.

In 2018, a seminal paper by Jacot et al. showed that the simplifications go
even further than that: In the infinite width limit, the dynamics remain
manageable even during training. Specifically, they proved that the neural
tangent kernel of an infinitely wide network remains constant throughout
training. Combined with the earlier results, this means that the neural tangent
kernel is analytically accessible at any point in training time.

Under the simple but realistic training paradigm of gradient descent of the
mean-squared-error loss, the training dynamics can in fact be solved
analytically in closed form and the prediction of the trained network on any
input be computed. The output of the trained network is again a Gaussian
process.

These simplifications in the infinite width limit give powerful insides into
the behavior of neural networks. At the same time, the neural tangent kernel
can be used as a kernel in kernel machines known from traditional machine
learning.

However, realistic neural networks are described by these computations only
approximately. To make statements about networks at finite width, one can
consider deviations from the strict infinite width limit. Mathematically, the
behavior of wide neural networks is similar to the behavior of elementary
particles as described by quantum field theory. In this context, the infinite
width limit corresponds to particles which do not interact and deviations are
introduced by letting the particles interact with each other.

Therefore, by using advanced techniques from quantum field theory, one can
analyze the behavior of neural networks. In particular, it is possible to
extrapolate from infinitely-wide networks and make approximate statements about
networks with finitely many neurons as encountered in practice.

In this research program, we use techniques from theoretical physics to analyze
the behavior of wide neural networks theoretically and to understand and
improve their architecture, training and initialization.


