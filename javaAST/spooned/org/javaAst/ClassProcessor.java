package org.javaAst;
public class ClassProcessor extends spoon.processing.AbstractProcessor<spoon.reflect.declaration.CtClass<?>> {
    public void process(spoon.reflect.declaration.CtClass<?> element) {
        // class name
        java.lang.System.out.println(element.getQualifiedName());
        java.lang.System.out.println("---------------");
        // all methods
        for (spoon.reflect.declaration.CtMethod<?> method : element.getMethods()) {
            processMethod(method);
            java.lang.System.out.println("--------");
        }
        java.lang.System.out.println("----------------------------");
    }

    private void processMethod(spoon.reflect.declaration.CtMethod<?> method) {
        // return type
        spoon.reflect.reference.CtTypeReference<?> type = method.getType();
        java.lang.System.out.println(type);
        // method name
        java.lang.String name = method.getSimpleName();
        java.lang.System.out.println(name);
        // parameters
        java.util.List<spoon.reflect.declaration.CtParameter<?>> parameters = method.getParameters();
        java.lang.System.out.println(parameters);
        // invocations
        java.util.List<spoon.reflect.code.CtInvocation<?>> invocations = method.getElements(new spoon.reflect.visitor.filter.TypeFilter<>(spoon.reflect.code.CtInvocation.class));
        java.util.HashSet<spoon.reflect.reference.CtExecutableReference<?>> functions = new java.util.HashSet<>();
        for (spoon.reflect.code.CtInvocation<?> i : invocations) {
            functions.add(i.getExecutable());
        }
        for (spoon.reflect.reference.CtExecutableReference<?> f : functions) {
            java.lang.System.out.println((f.getDeclaringType().toString() + '.') + f.getSimpleName());
        }
    }
}