def huruf(vokal):
    try:
        statement = str(input("Silahkan ketik stetement: "))
        for x in statement:
            if x in "AIUEOaiueo":
                vokal += 1
                print(f"Huruf Vokal: {x} = {vokal}")
            
            else:
                print(f"{statement} bukan merupakan huruf vokal")
            
    except:
        print(f"{statement} bukan merupakan huruf")

    finally:
        print(f"Menentukan huruf Vokal")

huruf(0)
