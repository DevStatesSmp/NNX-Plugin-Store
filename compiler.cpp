#include <iostream>
#include <string>
#include <unordered_map>
#include <sstream>
#include <fstream>
using namespace std;

// Token types
enum TokenType { INT, IDENTIFIER, ASSIGN, NUMBER, PLUS, MINUS, MUL, DIV, PRINT, END, COMMENT, ERROR };

struct Token {
    TokenType type;
    string value;
};

// Symbol table for variables
unordered_map<string, int> symbolTable;

// Lexer: Tokenize the input string
Token getToken(stringstream &ss) {
    char ch;
    while (ss >> ch) {
        if (isdigit(ch)) {
            string num(1, ch);
            while (isdigit(ss.peek())) {
                num += ss.get();
            }
            return {NUMBER, num};
        } else if (isalpha(ch)) {
            string ident(1, ch);
            while (isalnum(ss.peek())) {
                ident += ss.get();
            }
            if (ident == "print") return {PRINT, ident};
            return {IDENTIFIER, ident};
        } else if (ch == '+') return {PLUS, "+"};
        else if (ch == '-') return {MINUS, "-"};
        else if (ch == '*') return {MUL, "*"};
        else if (ch == '/') return {DIV, "/"};
        else if (ch == '=') return {ASSIGN, "="};
        else if (ch == ';') return {END, ";"};
        else if (ch == '#') {
            string comment;
            getline(ss, comment);
            return {COMMENT, comment};
        }
    }
    return {ERROR, ""};
}

// Interpreter: Evaluate and print expressions
void interpret(string line) {
    stringstream ss(line);
    Token token = getToken(ss);
    if (token.type == IDENTIFIER) {
        string var = token.value;
        token = getToken(ss);
        if (token.type == ASSIGN) {
            token = getToken(ss);
            int value = stoi(token.value);
            symbolTable[var] = value;
        }
    } else if (token.type == PRINT) {
        token = getToken(ss);
        if (token.type == IDENTIFIER) {
            cout << symbolTable[token.value] << endl;
        }
    }
}

// Function to create .ari file
void createAriFile() {
    cout << "Creating a .ari file...\n";
    ofstream file("program.ari");
    if (file.is_open()) {
        file << "# Simple ARI Script\n";
        file << "int x = 10;\n";
        file << "print x;\n";
        file.close();
        cout << "File 'program.ari' created successfully.\n";
    } else {
        cout << "Error: Unable to create file.\n";
    }
}

int main() {
    cout << "Simple Compiler v1.0\n";
    cout << "Type 'exit;' to quit.\n";
    createAriFile();
    string line;
    while (true) {
        cout << "> ";
        getline(cin, line);
        if (line == "exit;") break;
        interpret(line);
    }
    return 0;
}