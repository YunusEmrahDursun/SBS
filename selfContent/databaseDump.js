module.exports = function(dbName){
    var db=`
    CREATE DATABASE  IF NOT EXISTS \`${dbName}\` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_turkish_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
    USE \`${dbName}\`;
    -- MySQL dump 10.13  Distrib 8.0.16, for Win64 (x86_64)
    --
    -- Host: localhost    Database: sbs_comp_test
    -- ------------------------------------------------------
    -- Server version	8.0.16

    /*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
    /*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
    /*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
    SET NAMES utf8 ;
    /*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
    /*!40103 SET TIME_ZONE='+00:00' */;
    /*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
    /*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
    /*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
    /*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

    --
    -- Table structure for table \`bolge_personeli\`
    --

    DROP TABLE IF EXISTS \`bolge_personeli\`;
    /*!40101 SET @saved_cs_client     = @@character_set_client */;
    SET character_set_client = utf8mb4 ;
    CREATE TABLE \`bolge_personeli\` (
    \`id\` int(11) NOT NULL AUTO_INCREMENT,
    \`bolgeId\` int(11) NOT NULL,
    \`kullaniciId\` int(11) NOT NULL,
    \`silindiMi\` int(11) NOT NULL DEFAULT '0',
    PRIMARY KEY (\`id\`),
    UNIQUE KEY \`id_UNIQUE\` (\`id\`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;
    /*!40101 SET character_set_client = @saved_cs_client */;

    --
    -- Dumping data for table \`bolge_personeli\`
    --

    LOCK TABLES \`bolge_personeli\` WRITE;
    /*!40000 ALTER TABLE \`bolge_personeli\` DISABLE KEYS */;
    /*!40000 ALTER TABLE \`bolge_personeli\` ENABLE KEYS */;
    UNLOCK TABLES;

    --
    -- Table structure for table \`bolgeler\`
    --

    DROP TABLE IF EXISTS \`bolgeler\`;
    /*!40101 SET @saved_cs_client     = @@character_set_client */;
    SET character_set_client = utf8mb4 ;
    CREATE TABLE \`bolgeler\` (
    \`id\` int(11) NOT NULL AUTO_INCREMENT,
    \`sorumluId\` int(11) NOT NULL,
    \`bolgeAdi\` varchar(100) COLLATE utf8_turkish_ci NOT NULL,
    \`bolgelerAciklama\` text COLLATE utf8_turkish_ci,
    \`silindiMi\` int(11) NOT NULL DEFAULT '0',
    PRIMARY KEY (\`id\`),
    UNIQUE KEY \`id_UNIQUE\` (\`id\`)
    ) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;
    /*!40101 SET character_set_client = @saved_cs_client */;

    --
    -- Dumping data for table \`bolgeler\`
    --

    LOCK TABLES \`bolgeler\` WRITE;
    /*!40000 ALTER TABLE \`bolgeler\` DISABLE KEYS */;
    INSERT INTO \`bolgeler\` VALUES (1,0,'MARMARA BÖLGESİ',NULL,0),(2,0,'İÇ ANADOLU BÖLGESİ',NULL,0),(3,0,'AKDENİZ BÖLGESİ',NULL,0),(4,0,'EGE BÖLGESİ',NULL,0),(5,0,'KARADENİZ BÖLGESİ',NULL,0),(6,0,'DOĞU ANADOLU BÖLGESİ',NULL,0),(7,0,'GÜNEYDOĞU ANADOLU BÖLGESİ',NULL,0);
    /*!40000 ALTER TABLE \`bolgeler\` ENABLE KEYS */;
    UNLOCK TABLES;

    --
    -- Table structure for table \`cari_hareketler\`
    --

    DROP TABLE IF EXISTS \`cari_hareketler\`;
    /*!40101 SET @saved_cs_client     = @@character_set_client */;
    SET character_set_client = utf8mb4 ;
    CREATE TABLE \`cari_hareketler\` (
    \`id\` int(11) NOT NULL AUTO_INCREMENT,
    \`cariId\` int(11) NOT NULL,
    \`belgeTipId\` int(11) NOT NULL,
    \`belgeNo\` int(11) DEFAULT NULL,
    \`belgeTarihi\` datetime NOT NULL,
    \`a\` decimal(12,0) NOT NULL DEFAULT '0',
    \`b\` decimal(12,0) NOT NULL DEFAULT '0',
    \`silindiMi\` int(11) NOT NULL DEFAULT '0',
    PRIMARY KEY (\`id\`),
    UNIQUE KEY \`id_UNIQUE\` (\`id\`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;
    /*!40101 SET character_set_client = @saved_cs_client */;

    --
    -- Dumping data for table \`cari_hareketler\`
    --

    LOCK TABLES \`cari_hareketler\` WRITE;
    /*!40000 ALTER TABLE \`cari_hareketler\` DISABLE KEYS */;
    /*!40000 ALTER TABLE \`cari_hareketler\` ENABLE KEYS */;
    UNLOCK TABLES;

    --
    -- Table structure for table \`cariler\`
    --

    DROP TABLE IF EXISTS \`cariler\`;
    /*!40101 SET @saved_cs_client     = @@character_set_client */;
    SET character_set_client = utf8mb4 ;
    CREATE TABLE \`cariler\` (
    \`id\` int(11) NOT NULL AUTO_INCREMENT,
    \`bolgeId\` int(11) NOT NULL,
    \`cariAdi\` varchar(100) NOT NULL,
    \`cariAdres\` text,
    \`cariIliId\` int(11) NOT NULL DEFAULT '0',
    \`carilerKoordinat\` varchar(45) DEFAULT NULL,
    \`cariTel\` varchar(45) DEFAULT NULL,
    \`cariFaks\` varchar(45) DEFAULT NULL,
    \`cariEPosta\` varchar(100) DEFAULT NULL,
    \`cariVergiDairesi\` varchar(100) DEFAULT NULL,
    \`cariVergiNo\` varchar(45) DEFAULT NULL,
    \`cariMernis\` varchar(45) DEFAULT NULL,
    \`cariYetkiliKisiAdi\` varchar(100) DEFAULT NULL,
    \`cariYetkiliKisiSoyadi\` varchar(100) DEFAULT NULL,
    \`cariYetkiliKisiTel\` varchar(45) DEFAULT NULL,
    \`cariLogo\` varchar(200) NOT NULL DEFAULT 'nologo.jpg',
    \`silindiMi\` int(11) NOT NULL DEFAULT '0',
    PRIMARY KEY (\`id\`),
    UNIQUE KEY \`id_UNIQUE\` (\`id\`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
    /*!40101 SET character_set_client = @saved_cs_client */;

    --
    -- Dumping data for table \`cariler\`
    --

    LOCK TABLES \`cariler\` WRITE;
    /*!40000 ALTER TABLE \`cariler\` DISABLE KEYS */;
    /*!40000 ALTER TABLE \`cariler\` ENABLE KEYS */;
    UNLOCK TABLES;

    --
    -- Table structure for table \`iller\`
    --

    DROP TABLE IF EXISTS \`iller\`;
    /*!40101 SET @saved_cs_client     = @@character_set_client */;
    SET character_set_client = utf8mb4 ;
    CREATE TABLE \`iller\` (
    \`id\` int(11) NOT NULL AUTO_INCREMENT,
    \`il_adi\` varchar(100) NOT NULL,
    \`plaka_no\` int(11) NOT NULL,
    \`bolgeId\` int(11) NOT NULL,
    \`tel_kod\` varchar(7) NOT NULL,
    \`silindiMi\` int(11) NOT NULL DEFAULT '0',
    PRIMARY KEY (\`id\`),
    UNIQUE KEY \`id_UNIQUE\` (\`id\`),
    KEY \`CityID\` (\`id\`)
    ) ENGINE=InnoDB AUTO_INCREMENT=82 DEFAULT CHARSET=utf8;
    /*!40101 SET character_set_client = @saved_cs_client */;

    --
    -- Dumping data for table \`iller\`
    --

    LOCK TABLES \`iller\` WRITE;
    /*!40000 ALTER TABLE \`iller\` DISABLE KEYS */;
    INSERT INTO \`iller\` VALUES (1,'ADANA',1,3,'322',0),(2,'ADIYAMAN',2,7,'416',0),(3,'AFYONKARAHİSAR',3,4,'272',0),(4,'AĞRI',4,6,'472',0),(5,'AKSARAY',68,2,'382',0),(6,'AMASYA',5,5,'358',0),(7,'ANKARA',6,2,'312',0),(8,'ANTALYA',7,3,'242',0),(9,'ARDAHAN',75,6,'478',0),(10,'ARTVİN',8,5,'466',0),(11,'AYDIN',9,4,'256',0),(12,'BALIKESİR',10,4,'266',0),(13,'BARTIN',74,5,'378',0),(14,'BATMAN',72,7,'488',0),(15,'BAYBURT',69,5,'458',0),(16,'BİLECİK',11,1,'228',0),(17,'BİNGÖL',12,6,'426',0),(18,'BİTLİS',13,6,'434',0),(19,'BOLU',14,5,'374',0),(20,'BURDUR',15,3,'248',0),(21,'BURSA',16,1,'224',0),(22,'ÇANAKKALE',17,1,'286',0),(23,'ÇANKIRI',18,2,'376',0),(24,'ÇORUM',19,5,'364',0),(25,'DENİZLİ',20,4,'258',0),(26,'DİYARBAKIR',21,7,'412',0),(27,'DÜZCE',81,5,'380',0),(28,'EDİRNE',22,1,'284',0),(29,'ELAZIĞ',23,6,'424',0),(30,'ERZİNCAN',24,6,'446',0),(31,'ERZURUM',25,6,'442',0),(32,'ESKİŞEHİR',26,2,'222',0),(33,'GAZİANTEP',27,7,'342',0),(34,'GİRESUN',28,5,'454',0),(35,'GÜMÜŞHANE',29,5,'456',0),(36,'HAKKARİ',30,6,'438',0),(37,'HATAY',31,3,'326',0),(38,'IĞDIR',76,6,'476',0),(39,'ISPARTA',32,3,'246',0),(40,'İSTANBUL',34,1,'212-216',0),(41,'İZMİR',35,4,'232',0),(42,'KAHRAMANMARAŞ',46,3,'344',0),(43,'KARABÜK',78,5,'370',0),(44,'KARAMAN',70,2,'338',0),(45,'KARS',36,6,'474',0),(46,'KASTAMONU',37,5,'366',0),(47,'KAYSERİ',38,2,'352',0),(48,'KIRIKKALE',71,2,'318',0),(49,'KIRKLARELİ',39,1,'288',0),(50,'KIRŞEHİR',40,2,'386',0),(51,'KİLİS',79,7,'348',0),(52,'KOCAELİ',41,1,'262',0),(53,'KONYA',42,2,'332',0),(54,'KÜTAHYA',43,4,'274',0),(55,'MALATYA',44,6,'422',0),(56,'MANİSA',45,4,'236',0),(57,'MARDİN',47,7,'482',0),(58,'MERSİN',33,3,'324',0),(59,'MUĞLA',48,4,'252',0),(60,'MUŞ',49,6,'436',0),(61,'NEVŞEHİR',50,2,'384',0),(62,'NİĞDE',51,2,'388',0),(63,'ORDU',52,5,'452',0),(64,'OSMANİYE',80,3,'328',0),(65,'RİZE',53,5,'464',0),(66,'SAKARYA',54,1,'264',0),(67,'SAMSUN',55,5,'362',0),(68,'SİİRT',56,7,'484',0),(69,'SİNOP',57,5,'368',0),(70,'SİVAS',58,2,'346',0),(71,'ŞANLIURFA',63,7,'414',0),(72,'ŞIRNAK',73,7,'486',0),(73,'TEKİRDAĞ',59,1,'282',0),(74,'TOKAT',60,5,'356',0),(75,'TRABZON',61,5,'462',0),(76,'TUNCELİ',62,6,'428',0),(77,'UŞAK',64,4,'276',0),(78,'VAN',65,6,'432',0),(79,'YALOVA',77,1,'226',0),(80,'YOZGAT',66,2,'354',0),(81,'ZONGULDAK',67,5,'372',0);
    /*!40000 ALTER TABLE \`iller\` ENABLE KEYS */;
    UNLOCK TABLES;
    /*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

    /*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
    /*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
    /*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
    /*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
    /*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
    /*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
    /*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

    -- Dump completed on 2019-05-30 15:19:41

    `
    return db;

};