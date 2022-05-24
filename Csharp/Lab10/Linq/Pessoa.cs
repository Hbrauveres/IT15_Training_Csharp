class Pessoa
{
    public bool Casada {get;set;}
    public string Nome {get;set;}
    public DateTime DataNascimento {get;set;}

    public override string ToString()
    {
        return "[Nome=" + Nome + ", Casada=" + Casada + " ,DataNascimento=" + DataNascimento.ToShortDateString() + "]";
    }
}