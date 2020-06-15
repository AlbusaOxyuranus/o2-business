using System;

namespace O2.Business.BackendForFront.Models
{
    public class CertificateModel
    {
        public long Id { get; set; }
        
        public string Name { get; set; }
        
        public int ShortNumber { get; set; }
        
        public string Serial { get; set; }
        
        public string Number { get; set; }

        public DateTime DateOfCert { get; set; }

        public string Middlename { get; set; }

        public string Firstname { get; set; }

        public string Lastname { get; set; }

        public string Education { get; set; }

        public bool Visible { get; set; }

        public string LockInfo { get; set; }

        public bool Lock { get; set; }
    }
}