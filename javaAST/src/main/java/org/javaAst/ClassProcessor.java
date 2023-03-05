package org.javaAst;

import spoon.processing.AbstractProcessor;
import spoon.reflect.code.CtInvocation;
import spoon.reflect.declaration.CtClass;
import spoon.reflect.declaration.CtMethod;
import spoon.reflect.declaration.CtParameter;
import spoon.reflect.reference.CtExecutableReference;
import spoon.reflect.reference.CtTypeReference;
import spoon.reflect.visitor.filter.TypeFilter;

import java.util.HashSet;
import java.util.List;

public class ClassProcessor extends AbstractProcessor<CtClass<?>> {
    public void process(CtClass<?> element) {
        // class name
        System.out.println(element.getQualifiedName());
        System.out.println("---------------");

        // all methods
        for (CtMethod<?> method : element.getMethods()) {
            processMethod(method);
            System.out.println("--------");
        }


        System.out.println("----------------------------");
    }

    private void processMethod(CtMethod<?> method) {
        // return type
        CtTypeReference<?> type = method.getType();
        System.out.println(type);

        // method name
        String name = method.getSimpleName();
        System.out.println(name);

        // parameters
        List<CtParameter<?>> parameters = method.getParameters();
        System.out.println(parameters);

        // invocations
        List<CtInvocation<?>> invocations = method.getElements(new TypeFilter<>(CtInvocation.class));
        HashSet<CtExecutableReference<?>> functions = new HashSet<>();
        for (CtInvocation<?> i : invocations) {
            functions.add(i.getExecutable());
        }
        for (CtExecutableReference<?> f : functions) {
            System.out.println(f.getDeclaringType().toString() + '.' + f.getSimpleName());
        }
    }
}
