package kr.co.reverse.archive.api.service;


import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class FileService {

    @Value("${cloud.aws.s3.bucket}")
    private String bucketName;

    private final AmazonS3Client amazonS3Client;

    @Transactional
    public String uploadFile(MultipartFile file){
        String fileName = "image/" + createFileName(file.getOriginalFilename());

        ObjectMetadata metadata = new ObjectMetadata();
        metadata.setContentType(file.getContentType());
        metadata.setContentLength(file.getSize());

        try {
            PutObjectRequest request = new PutObjectRequest(bucketName, fileName, file.getInputStream(), metadata);
            amazonS3Client.putObject(request);      //upload
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        return amazonS3Client.getUrl(bucketName, fileName).toString();
    }

    public String createFileName(String fileName){
        return UUID.randomUUID().toString().concat("_" + fileName);
    }

    @Transactional
    public void deleteFile(String fileName){
        amazonS3Client.deleteObject(bucketName, fileName);
    }

    public List<String> uploadFiles(List<MultipartFile> multipartFiles) {

        List<String> urls = new ArrayList<>();

        for(MultipartFile multipartFile : multipartFiles){
            String url = uploadFile(multipartFile);
            urls.add(url);
        }

        return urls;
    }
}
